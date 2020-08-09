//import express from 'express';
//import bodyParser from 'body-parser';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;

var projects_routes = require('./projects/projects_routes');

app.use("/api/projects", projects_routes)

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('build/public'));

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})