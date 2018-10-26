const express = require('express'); 
let app = express(); 

app.use(express.static(__dirname + '/../client/dist')); 

app.get(`/companies/${companyName}`, function(req, res) {
    //TODO: this route will get the information about a given company's
    //stock price, etc. from the DB
    //the things I was are:    id INT AUTO_INCREMENT primary key, 
        // companyName,
        // currentPrice, 
        // percentageApproved,
        // percentageChange
    //QUESTION: can I actually format a route like this..? 
}); 

let port = 3005; 

app.listen(port, function() {
    console.log(`listening on port ${port}`); 
}); 