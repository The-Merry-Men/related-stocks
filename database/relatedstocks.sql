DROP DATABASE IF EXISTS fec_robinhood; 

CREATE DATABASE IF NOT EXISTS fec_robinhood;

USE fec_robinhood; 

CREATE TABLE IF NOT EXISTS company_info (
    SELECT id INT AUTO_INCREMENT primary key, 
    companyName VARCHAR(20), 
    currentPrice DECIMAL(5, 2), 
    percentageApproved INT, 
    percentageChange INT
);

-- CREATE TABLE IF NOT EXISTS user_info (
--     id INT AUTO_INCREMENT primary key, 
--     company1 INT SELECT RAND()*(100), 
--     company2 INT SELECT RAND()*(100),
--     company3 INT SELECT RAND()*(100), 
--     company4 INT SELECT RAND()*(100), 
--     company5 INT SELECT RAND()*(100), 
--     company6 INT SELECT RAND()*(100), 
--     company7 INT SELECT RAND()*(100)m,
--     company8 INT SELECT RAND()*(100), 
--     company9 INT SELECT RAND()*(100), 
--     company10 INT SELECT RAND()*(100), 
--     company11 INT SELECT RAND()*(100), 
--     company12 INT SELECT RAND()*(100), 
--     company13 INT SELECT RAND()*(100)
-- );
