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
    console.log('posting finding excluded')
    excludedService.findExcluded(req.app.get('db'), req.body.userId, req.body.categoryId, req.body.category)
      .then(response => {
        console.log('response', response.rows.length, req.body.category);
        if (response.rows.length === 0) {
          console.log('sending 404');
          excludedService.addExcluded(req.app.get('db'), req.body.userId, req.body.categoryId, req.body.category)
            .then(done => {
              console.log('done');
            })
        } else {
          console.log(response.rows);
          excludedService.deleteExcludedId(req.app.get('db'), response.rows[0].id)
            .then(() => {
              console.log('done with that too');
            });
        }
        
      })
    ;
  })

module.exports = excludedRouter;