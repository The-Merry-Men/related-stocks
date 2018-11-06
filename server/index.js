const express = require('express'); 
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'fec_robinhood',
});

app.use(express.static(`${__dirname}/../client/dist`));


app.get('/companies/:id', (req, res) => {
  connection.query('SELECT * from company_info LIMIT 12', (error, results) => {
    if (error) {
      res.sendStatus(400);
    } else {
      console.log(results);
      res.send(results);
    }
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
