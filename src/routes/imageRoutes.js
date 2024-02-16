const express = require('express');
const routes = express.Router();
const imageController = require('../controllers/imageController');

routes
    .get('/', imageController.getAllImages)
    .get('/getLastId', imageController.getLastId)
    
    .post('/add', imageController.addImage)
module.exports = routes;