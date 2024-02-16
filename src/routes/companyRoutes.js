const express = require('express');
const routes = express.Router();
const companyController = require('../controllers/companyController');

routes
    .get('/', companyController.getAllCompanies)
    .get('/company/:id', companyController.getCompanyById)
    .get('/getLastId', companyController.getLastId)
    .get('/getActivedCompanies', companyController.getActivedCompanies)

    .post('/add', companyController.addCompany)

    .put('/update', companyController.updateCompany)
    .put('/updateCompanyState', companyController.updateCompanyState)

module.exports = routes;