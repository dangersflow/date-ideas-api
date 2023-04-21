// Dependencies
const knex = require('knex');

// Express instance
const app = require('./app');

// Config Files
const { PORT, HOST, USER, PASSWORD, DATABASE, DB_PORT } = require('./config');

// Assign knex instance to db
const db = knex({
  client: 'pg',
  connection: {
    host: HOST,
    port: DB_PORT,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
  },
});

// Connect the db instance to app.js to use with express
app.set('db', db);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
