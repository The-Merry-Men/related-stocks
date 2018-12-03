const mysql = require('mysql');
const faker = require('faker');

const connection = mysql.createConnection({
  host: 'relatedstocks.czexrmkdzxsz.us-east-2.rds.amazonaws.com',
  port: 3306,
  user: 'root',
  password: 'rootpassword',
  database: 'fec_robinhood',
});
let count = 0;
function dataGen() {
  const companyName = faker.company.companyName({ minimum: 5, maximum: 20 });
  const currentPrice = () => (Math.random() * 150).toFixed(2); 
  const percentageApproved = faker.random.number(100);
  const percentageChange = faker.random.number(100);

  const companyQuery = 'INSERT INTO company_info (companyName, currentPrice, percentageApproved, percentageChange) VALUES(?, ?, ?, ?)';

  connection.query(companyQuery, [companyName, currentPrice(), percentageApproved, percentageChange],
    (err) => {
      if (err) {
        console.log(err);
      } else {
        count++;
        if (count >= 2100) {
          connection.end();
        }
      }
    });

  for(var i = 1; i < 21; i++) {
      let userID = i; 
      let company_id = Math.floor(Math.random()*100); 
      const userQuery = `INSERT INTO user_purchase (userID, company_id) VALUES (?, ?)`; 
      connection.query(userQuery, [userID, company_id],
      (err) => {
        if (err) {
          console.log(err);
        } else {
          count++;
          if (count >= 2100) {
            connection.end();
          }
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
