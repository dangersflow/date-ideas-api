// Dependencies
const express = require('express');
const path = require('path');
require('dotenv').config();

// Use express methods for route and JSON parsing
const mealsRouter = express.Router()
const jsonBodyParser = express.json()

// Services
const mealsService = require('./../services/meals-service');

mealsRouter
  .route('/')
  .get((req, res, next) => {
    mealsService.getMeal(req.app.get('db'))
      .then(returned => {
        res.json(returned.rows[0]);
      })
  })

module.exports = mealsRouter;