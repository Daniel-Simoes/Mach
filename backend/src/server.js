const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes.js');
const path = require('path');

const app = express();

mongoose.connect('mongodb+srv://match:match@match-tvuy0.mongodb.net/match?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);



app.listen(3333);