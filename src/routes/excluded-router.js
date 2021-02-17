// Dependencies
const express = require('express');
const path = require('path');
require('dotenv').config();

// Use express methods for route and JSON parsing
const excludedRouter = express.Router()
const jsonBodyParser = express.json()

// Services
const excludedService = require('./../services/excluded-service');

excludedRouter
  .route('/')
  .post(jsonBodyParser, (req, res, next) => {
    excludedService.findExcluded(req.app.get('db'), req.body.userId, req.body.categoryId, req.body.category)
      .then(response => {
        if (response.rows.length === 0) {
          excludedService.addExcluded(req.app.get('db'), req.body.userId, req.body.categoryId, req.body.category)
            .then(done => {
              res.sendStatus(201).end();
            })
        } else {
          excludedService.deleteExcludedId(req.app.get('db'), response.rows[0].id)
            .then(() => {
              res.sendStatus(204).end();
            });
        }
        
      })
      .catch(next)
    ;
  })

module.exports = excludedRouter;