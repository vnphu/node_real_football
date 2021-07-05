const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD || null,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
    operatorsAliases: 0,
    logging: false
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD || null,
    database: process.env.DATABASE_NAME,
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: 0,
    logging: false
  },
  test: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD || null,
    database: process.env.DATABASE_NAME,
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: 0,
    logging: false
  }
}
