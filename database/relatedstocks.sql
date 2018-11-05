DROP DATABASE IF EXISTS fec_robinhood; 

CREATE DATABASE IF NOT EXISTS fec_robinhood;

USE fec_robinhood; 

CREATE TABLE IF NOT EXISTS company_info (
    id INT AUTO_INCREMENT primary key, 
    companyName VARCHAR(20), 
    currentPrice DECIMAL(5, 2), 
    percentageApproved INT, 
    percentageChange INT
);

CREATE TABLE IF NOT EXISTS user_info (
    id INT AUTO_INCREMENT primary key, 
    company1 INT, 
    company2 INT,
    company3 INT, 
    company4 INT, 
    company5 INT, 
    company6 INT, 
    company7 INT, 
    company8 INT, 
    company9 INT, 
    company10 INT, 
    company11 INT, 
    company12 INT, 
    company13 INT
)
