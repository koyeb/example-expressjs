const express = require('express');
const routes = express.Router();
const languageController = require('../controllers/languageController');
const { get } = require('./quizRoutes');


routes
    .get('/', languageController.getAllLanguages)
    .get('/language/:id', languageController.getLanguageById)
    .get('/getLastId', languageController.getLastId)
    .get('/getAddedLanguages', languageController.getAddedLanguages)
    .get('/getNotAddedLanguages', languageController.getNotAddedLanguages)
    .get('/getActivedLanguages', languageController.getActivedLanguages)

    // .post('/add', languageController.addLanguage)

    .put('/updateLanguageState', languageController.updateLanguageState)

module.exports = routes;