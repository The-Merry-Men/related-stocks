//startup script to fill the db with fake data
const mysql = require('mysql'); 
const faker = require('faker'); 
const Promise = require('bluebird'); 

const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    database: 'fec_robinhood' 
}); 

const dataGen = function(){
    let companyName = faker.company.companyName();
    let currentPrice = faker.random.number(100);
    let percentageApproved = faker.random.number(100); 
    let percentageChange = faker.random.number(100);
    
    var companyQuery = 'INSERT INTO company_info (companyName, currentPrice, percentageApproved, percentageChange) VALUES(?, ?, ?, ?)'

    connection.query(companyQuery, [companyName, currentPrice, percentageApproved, percentageChange], (err) => {
        if(err) {
            return console.log(err); 
        } else {
            console.log('SUCCESS');
        }
    })
}

const dataInput = function() {
    for(var i = 0; i < 20; i++) {
        dataGen()
    }
}

dataInput(); 