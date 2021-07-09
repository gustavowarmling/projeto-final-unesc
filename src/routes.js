const { Router } = require('express');
const DesignerController = require('./controllers/designer.js');
const StyleController = require('./controllers/style.js');

const routes = Router();

routes.get('/designer', DesignerController.index);
routes.get('/designer/:id', DesignerController.show);
routes.post('/designer', DesignerController.create);
routes.put('/designer/:id', DesignerController.update);
routes.delete('/designer/:id', DesignerController.delete);

routes.get('/style', StyleController.index);
routes.get('/style/:id', StyleController.show);
routes.post('/style', StyleController.create);
routes.put('/style/:id', StyleController.update);
routes.delete('/style/:id', StyleController.delete);

module.exports = routes;