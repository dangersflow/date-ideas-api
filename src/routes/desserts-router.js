// Dependencies
const express = require('express');
const path = require('path');
require('dotenv').config();

// Use express methods for route and JSON parsing
const dessertsRouter = express.Router()
const jsonBodyParser = express.json()

// Services
const dessertsService = require('./../services/desserts-service');
const excludedService = require('./../services/excluded-service');

dessertsRouter
  .route('/')
  .get((req, res, next) => {
    dessertsService.getLoggedOutDessert(req.app.get('db'))
      .then(returned => {
        res.json(returned.rows[0]);
      })
      .catch(next)
  }).post(jsonBodyParser, (req, res, next) => {
    excludedService.deleteExcludedYear(req.app.get('db'), req.body.userId)
      .then(() => {
      dessertsService.getLoggedInDessert(req.app.get('db'), req.body.userId)
        .then(response => {
          res.json(response.rows[0]);
        })
      }).catch(next)
    ;
  })

module.exports = dessertsRouter;