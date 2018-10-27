const mysql = require('mysql');
const faker = require('faker');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fec_robinhood',
});

function dataGen() {
  const companyName = faker.company.companyName();
  const currentPrice = faker.random.number(100);
  const percentageApproved = faker.random.number(100);
  const percentageChange = faker.random.number(100);

  const companyQuery = 'INSERT INTO company_info (companyName, currentPrice, percentageApproved, percentageChange) VALUES(?, ?, ?, ?)';

  connection.query(companyQuery, [companyName, currentPrice, percentageApproved, percentageChange],
    (err) => {
      if (err) {
        return console.log(err);
      }
      return console.log('SUCCESS');
    });
}

function dataInput() {
  for (let i = 0; i < 99; i++) {
    dataGen();
  }
}

dataInput();
