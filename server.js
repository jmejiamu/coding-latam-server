const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');
const cors = require('cors');


const app = express();

app.use(bodyParser.json());
app.use(cors());

// Test get method route
app.get('/test', (req, res) => {
    res.status(200).send("This is a test")
})


app.listen(3006, process.env.URL, () => {
    console.log("The app is running at port 3006");
})