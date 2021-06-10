const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

mongoose.connect(`mongodb+srv://dbUser:senhamongo@cluster0.qjzlu.mongodb.net/projeto11?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Conexão realizada com sucesso!')
});

const app = express();
const server = http.Server(app);

const routes = require('./routes.js');

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);