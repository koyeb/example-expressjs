const express = require('express');
const routes = express.Router();
const textsLanguagesController = require('../controllers/textsLanguagesController');

routes
    .get('/getLastId', textsLanguagesController.getLastId)
    .get('/getAll', textsLanguagesController.getAll)

    .post('/add', textsLanguagesController.addTextLanguage)

module.exports = routes;