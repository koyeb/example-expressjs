const express = require('express');
const routes = express.Router();
const themesController = require('../controllers/themesController');

routes
    .get('/', themesController.getAllThemes)
    .get('/theme/:id', themesController.getThemeById)
    .get('/getLastId', themesController.getLastId)
    .get('/getActivedThemes', themesController.getActivedThemes)
    
    .post('/add', themesController.addTheme)
    
    .put('/update', themesController.updateTheme)
    .put('/updateThemeState', themesController.updateThemeState)
module.exports = routes;