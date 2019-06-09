const functions = require('firebase-functions');
const express = require("express")
const path = require("path")

const app = express()


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const apiKey = functions.config().google.api_key


app.get('/', (req, res, next) => {
  res.render('index', { apiKey });
});

exports.app = functions.https.onRequest(app);
