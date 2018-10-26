CREATE DATABASE IF NOT EXISTS fec_robinhood;

USE fec_robinhood; 

CREATE TABLE IF NOT EXISTS company_info (
    id INT AUTO_INCREMENT primary key, 
    companyName VARCHAR(100), 
    currentPrice INT, 
    percentageApproved INT, 
    percentageChange INT
);