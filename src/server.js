const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const localhost = 3333;
const app = express();

mongoose.connect('mongodb+srv://silvioronaldo:projectapi@clusterprojectapi-udcjj.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(localhost, () => {
    console.log(`Server is running at localhost ${localhost}`);
});
