const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const Usuario = require('./controller/Usuario');
const route = require('./route');

const mongoose = require('mongoose');
const promise = mongoose.connect('mongodb://localhost/e-list', {
    useMongoClient: true
});
promise.then((db) => {});

app.use(bodyParser.json());
app.use((req, res, next) => {
    const allowedOrigins = ['http://localhost:8080', 'http://localhost:8000'];
    if (allowedOrigins.indexOf(req.headers.origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    }
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    next();
});

app.use('/api', route);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
