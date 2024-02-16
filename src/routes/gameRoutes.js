const express = require('express');
const routes = express.Router();
const gameController = require('../controllers/gameController');

routes
    .get('/', gameController.getAllGames)
    .get('/game/:id', gameController.getGameById)

// .put('/update/:id', companyController.updateCompany)

module.exports = routes;