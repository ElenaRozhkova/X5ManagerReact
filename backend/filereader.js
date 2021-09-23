const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routertest = require('./router');
const fs = require('fs');

// Слушаем 3000 порт
const { PORT = 3000 } = process.env;

const app = express();
// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    // Pass to next layer of middleware
    next();
  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routertest);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})

   


       