const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 8080;

mongoose.connect('mongodb+srv://raviyoof:HqfXO2CNyWliJMh1@cluster0.gvbotqu.mongodb.net').then(() => console.log('Connected!'));

app.post('shorter');

app.listen(PORT, () => {
    console.log("Server Started :-", PORT);
})