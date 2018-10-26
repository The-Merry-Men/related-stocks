//startup script to fill the db with fake data
const mysql = require('mysql'); 
const faker = require('faker'); 

const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: '',
    database: 'fec_robinhood' 
}); 

const dataGen = function(){
    let companyName = faker.company.companyName();
    let currentPrice = faker.random.number(100);
    let percentageApproved = faker.random.number(100); 
    let percentageChange = faker.random.number(100);
    
    var companyQuery = 'INSERT INTO company_info (companyName, currentPrice, percentageApproved, percentageChange) VALUES(?, ?, ?, ?)'; 

    connection.query(companyQuery, [companyName, currentPrice, percentageApproved, percentageChange], (err) => {
        if(err) {
            return console.log(err); 
        } else {
            console.log('SUCCESS');
        }
    });
}

const dataInput = function() {
    for(var i = 0; i < 99; i++) {
        //99 because we plan to use 1 at the end that will allow for a cohesive presentation 
        dataGen()
    }
}

dataInput(); 