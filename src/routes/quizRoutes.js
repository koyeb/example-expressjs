const express = require('express');
const routes = express.Router();
const quizController = require('../controllers/quizController');

routes
    .get('/', quizController.getAllQuizs)
    .get('/lastid', quizController.getLastId)

    .post('/add', quizController.addQuiz)
    
module.exports = routes;