const express = require('express');
const routes = express.Router();
const reto_imageController = require('../controllers/retoImageController');

routes
    .get('/image/:id', reto_imageController.getRetoImageById)
    .get('/getLastId', reto_imageController.getLastId)

    .post('/add', reto_imageController.addRetoImage)
    
module.exports = routes;