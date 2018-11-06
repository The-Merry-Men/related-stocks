DROP DATABASE IF EXISTS fec_robinhood; 

CREATE DATABASE fec_robinhood;

USE fec_robinhood; 

DROP TABLE IF EXISTS company_info; 

CREATE TABLE company_info (
    id int NOT NULL AUTO_INCREMENT,
    companyName VARCHAR(20), 
    currentPrice DECIMAL(5, 2), 
    percentageApproved INT, 
    percentageChange INT,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS user_purchase; 

CREATE TABLE user_purchase (
    userID int, 
    company_id int 
); 