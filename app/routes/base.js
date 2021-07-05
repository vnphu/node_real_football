const { Router } = require('express')

class BaseRouter {
  constructor() {
    this.router = Router()
    this._setupRoute && this._setupRoute()
  }

  _handleRoute(handler) {
    return (req, res, next) => {
      try {
        handler(req, res, next)
      } catch (error) {
        res.status(500).json(error)
      }
    }
  }
}

module.exports = BaseRouter
