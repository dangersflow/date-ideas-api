// Dependencies
const express = require('express');
const path = require('path');
require('dotenv').config();

// Use express methods for route and JSON parsing
const activitiesRouter = express.Router()
const jsonBodyParser = express.json()

// Services
const activitiesService = require('./../services/activities-service');

activitiesRouter
  .route('/')
  .get((req, res, next) => {
    activitiesService.getLoggedOutActivity(req.app.get('db'))
      .then(returned => {
        res.json(returned.rows[0]);
      })
  }).post(jsonBodyParser, (req, res, next) => {
    activitiesService.getLoggedInActivity(req.app.get('db'), req.body.userId)
      .then(response => {
        res.json(response.rows[0]);
      })
    ;
  })

module.exports = activitiesRouter;