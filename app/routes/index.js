const BaseRouter = require('./base')
const api_v1 = require('./api_v1')

class IndexRoute extends BaseRouter {
  _setupRoute() {
    this.router.use('/api/v1', api_v1)
  }
}

module.exports = new IndexRoute().router
