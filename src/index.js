const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

PORT = process.env.PORT || 3333

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

app.get('/', (req, res) => {
    res.send('Status: Online!');
});
  
app.get('*', (req, res) => {
    res.redirect('/');
});

server.listen(PORT, () => {
// eslint-disable-next-line no-console
console.log(`🚀 Servidor iniciado na porta ${PORT}!`);
});

