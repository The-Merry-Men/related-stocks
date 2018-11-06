const mysql = require('mysql');
const faker = require('faker');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fec_robinhood',
});

function dataGen() {
  const companyName = faker.company.companyName({ minimum: 5, maximum: 20 });
  const currentPrice = () => (Math.random() * 150).toFixed(2); 
  const percentageApproved = faker.random.number(100);
  const percentageChange = faker.random.number(100);

  const companyQuery = 'INSERT INTO company_info (companyName, currentPrice, percentageApproved, percentageChange) VALUES(?, ?, ?, ?)';

  connection.query(companyQuery, [companyName, currentPrice(), percentageApproved, percentageChange],
    (err) => {
      if (err) {
        return console.log(err);
      }
    });

  for(var i = 1; i < 21; i++) {
      let userID = i; 
      let company_id = Math.random()*100; 
      const userQuery = `INSERT INTO user_purchase (userID, company_id) VALUES (?, ?)`; 
      connection.query(userQuery, [userID, company_id],
      (err) => {
        if (err) {
          return console.log(err);
        }
      });
  }
  
}

function dataInput() {
  for (let i = 0; i < 100; i++) {
    dataGen();
  }
}

dataInput();
