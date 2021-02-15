require('dotenv').config();
module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: `${process.env.DATABASE_URL}?ssl=true` || 'postgresql://joe@localhost/date-ideas',
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://joe@localhost/date-ideas-test',
}