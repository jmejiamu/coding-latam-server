const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');
const cors = require('cors');

// Database Connection
const db = knex({
    client: 'pg',
    connection: {
        host: process.env.HOST,
        user: process.env.USER_NAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }
})

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Import Routes
const getUser = require('./routes/get');

// Test get method route
app.get('/test', (req, res) => {
    res.status(200).send("This is a test")
})

// Get all user info



app.listen(3006, process.env.URL, () => {
    console.log("The app is running at port 3006");
})