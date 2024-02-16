const express = require('express');
const routes = express.Router();
const textsController = require('../controllers/textsController');

routes
    .get('/', textsController.getAllTexts)
    .get('/getLastId/', textsController.getLastId)
    .get('/getQuestionId/', textsController.getQuestionId)
    .get('/getQuizId/', textsController.getQuizQuestions)
    .get('/getFlashId/', textsController.getFlashQuestions)
    .get('/getChipsId/', textsController.getChipsQuestions)
    .get('/getJuegos/', textsController.getJuegosQuestions)
    .get('/getDeportes/', textsController.getDeportesQuestions)
    .get('/getViajar/', textsController.getViajarQuestions)
    .get('/getCineYSeries/', textsController.getCineYSeriesQuestions)
    .get('/getQueSabesDe/', textsController.getQueSabesDeQuestions)

    .post('/add', textsController.addText)

module.exports = routes;