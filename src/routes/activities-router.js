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
    activitiesService.getActivity(req.app.get('db'))
      .then(returned => {
        res.json(returned.rows[0]);
      })
  })

module.exports = activitiesRouter;