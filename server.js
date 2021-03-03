const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

// Database Connection
const db = knex({
    client: 'pg',
    connection: {
        host: process.env.HOSTNAME,
        user: process.env.USERNAMEPG,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }
})

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Import Routes
const getUser = require('./routes/get');
const saveInfo = require('./routes/post');

// Test get method route
app.get('/test', (req, res) => {
    res.status(200).send("This is a test")
});

// Get all user info
app.get('/userinfo', (req, res) => {
    getUser.getUserData(req, res, db);
});

// Save user information in the database
app.post('/saveinfo', (req, res) => {
    saveInfo.saveUserData(req, res, db);
})




app.listen(3006, process.env.URL, () => {
    console.log("The app is running at port 3006");
})