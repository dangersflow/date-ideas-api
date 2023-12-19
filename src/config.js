require("dotenv").config();
module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "dev",
  DATABASE_URL:
    process.env.DATABASE_URL ||
    "postgresql://joe:password@172.16.238.13:5432/date-ideas",
  TEST_DATABASE_URL:
    process.env.TEST_DATABASE_URL ||
    "postgresql://joe:password@172.16.238.13:5432/date-ideas-test",
  DB_PORT: process.env.DB_PORT,
  HOST: process.env.HOST,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DATABASE: process.env.DATABASE,
};
