const BaseRouter = require('../base')
const product = require('./product')
const account = require('./user')
const admin = require('./admin')
const blog = require('./blog')
const category = require('./category')

class ApiClientRouter extends BaseRouter {
  _setupRoute() {
    this.router.use('/admin', admin)
    this.router.use('/product', product)
    this.router.use('/account', account)
    this.router.use('/blog', blog)
    this.router.use('/category', category)
  }
}

module.exports = new ApiClientRouter().router
