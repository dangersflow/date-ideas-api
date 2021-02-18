# Date Ideas API

## Live Link: https://date-ideas.vercel.app/

## Front End Repo: https://github.com/joewickes/date-ideas

## Table of Contents
- [Summary](##-summary)
- [How To Use It](##-how-to-use-it)
- [Technologies Used](##-technologies-used)

## Summary
Date ideas is an app that generates random date ideas in the categories: Activity, meal, and dessert.

As a user I can
- While Logged Out
  - Get all ideas (activity, meal, and dessert)
  - Get just a new activity idea
  - Get just a new meal idea
  - Get just a ew dessert idea
  - Sign up for an account
  - Log into an account
- While Logged In
  - I get redirected to the Home Page with new untried ideas in each category
  - I can get all of my untried ideas
  - Get just a new, untried activity idea
  - Get just a new, untried meal idea
  - Get just a new, untried dessert idea
  - Check off an activity, meal, or dessert idea for one year (before re-suggestion)
  - Uncheck an activity, meal, or dessert idea
  - I can log out

## How To Use It
Here are the different API endpoints, what kind of data they take, and what kind of end result to expect

Endpoint: /api/activities
- Request Type: GET
- Expected Data Type: N/A
- Happy Path Response: A 200 with a object with a random activity name

-----

Endpoint: /api/activities
- Request Type: POST
- Expected Data Type: Object with user id
- Happy Path Response: A 200 with a object with a random activity name and activity id

-----

Endpoint: /api/meals
- Request Type: GET
- Expected Data Type: N/A
- Happy Path Response: A 200 with a object with a random meal name

-----

Endpoint: /api/meals
- Request Type: POST
- Expected Data Type: Object with user id
- Happy Path Response: A 200 with a object with a random meal name and meal id

-----

Endpoint: /api/desserts
- Request Type: GET
- Expected Data Type: N/A
- Happy Path Response: A 200 with a object with a random dessert name

-----

Endpoint: /api/desserts
- Request Type: POST
- Expected Data Type: Object with user id
- Happy Path Response: A 200 with a object with a random dessert name and dessert id

-----

Endpoint: /api/excluded
- Request Type: POST
- Expected Data Type: Object with user id, category id, and category name
- Happy Path Response: A 201 if the exclusion didn't exist and was created, and a 204 if it existed and was deleted

## Technologies Used
- Node
- Express
- Knex
- PostgreSQL
- Helmet
- Postgrator
- Chai (development)
- Mocha (development)
- Nodemon (development)
- Supertest (development)