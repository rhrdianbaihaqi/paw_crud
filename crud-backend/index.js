const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

//Database 
const database = require('./config/database');
database();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
const studentRoute = require('./routes/studentRoute');
app.use('/mahasiswa', studentRoute);

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});