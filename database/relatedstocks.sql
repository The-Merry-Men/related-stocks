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
