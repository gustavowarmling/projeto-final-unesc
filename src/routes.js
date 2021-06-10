const { Router } = require('express');
const AlbumController = require('./controllers/album.js');

const routes = Router();

routes.get('/album', AlbumController.index);
routes.get('/album/:id', AlbumController.show);
routes.post('/album', AlbumController.create);

module.exports = routes;