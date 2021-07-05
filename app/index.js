const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')

const db = require('../models')
const route = require('./routes')

dotenv.config()

class App {
  constructor() {
    this.app = express()
    this._setupMiddleware()
    this._setupRoute()
  }

  _setupMiddleware() {
    this.app.use(cors())
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(
      bodyParser.json({
        limit: '50mb',
        extended: true
      })
    )
    this.app.use(morgan('short'))
    this.app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
    if (process.env.NODE_ENV !== 'test') {
      this.app.use(morgan('combined'))
    }
  }

  _setupRoute() {
    this.app.use(route)
  }

  async start() {
    await db.sequelize.sync()
    console.log('☕️ Database is connected')
    const PORT = process.env.PORT || 3000

    this.app.listen(PORT, () => {
      console.log('🚀 App listen on port ' + PORT)
    })
  }
}

module.exports = App
