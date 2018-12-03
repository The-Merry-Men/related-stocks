const express = require('express'); 
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'relatedstocks.czexrmkdzxsz.us-east-2.rds.amazonaws.com',
  user: 'root',
  port: 3306,
  password: 'rootpassword',
  database: 'fec_robinhood',
});


app.use(express.static(`${__dirname}/client/dist`));

app.get(`/related/companies/:id`, (req, res) => {
  var currentID = req.params.id; 
  console.log(currentID);
  connection.query('SELECT id, companyName, currentPrice, percentageApproved, percentageChange ' +
  'from company_info INNER JOIN user_purchase ' + 
  'ON company_info.id = user_purchase.company_id ' + 
  'AND user_purchase.userID = ? LIMIT 12', 
  currentID, (error, results) => {
    if (error) {
      console.log(error)
      res.sendStatus(400);
    } else {
      console.log('success')
      res.send(results);
    }
  });
});

const port = 3009;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

