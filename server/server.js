require('dotenv').config();
require('./database');

const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Team Sushi\'s grocery app is coming soon!</h1>');
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})