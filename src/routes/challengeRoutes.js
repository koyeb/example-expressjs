const express = require('express');
const routes = express.Router();
const challengesController = require('../controllers/challengeController');

routes
    .get('/', challengesController.getAllChallenges)
    .get('/getlastid', challengesController.getLastId)
    .get('/getchallengebyid/:id', challengesController.getChallengeById)
    .get('/getchallengestoshow', challengesController.getChallengesToShow)
    .get('/getactivedchallenges', challengesController.getActivedChallenges)
    .get('/getQuizToShow', challengesController.getQuizToShow)
    .get('/getChipsToShow', challengesController.getChipsToShow)
    .get('/getFlashToShow', challengesController.getFlashToShow)

    .post('/add', challengesController.addChallenge)

    .put('/updateChallengeState', challengesController.updateChallengeState)
    .put('/update/:id', challengesController.updateChallenge)
    
module.exports = routes;