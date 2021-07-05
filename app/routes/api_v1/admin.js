const BaseRouter = require('../base')
const ProductController = require('../../controllers/ProductController')
const AccountController = require('../../controllers/AccountController')

class AdminRouter extends BaseRouter {
  _setupRoute() {
    this.router.get('/admin/account', this._handleRoute(AccountController.getAllUsers))
    this.router.get('/admin/account/:accountId', this._handleRoute(AccountController.getById))
    this.router.post('/admin/product/create', this._handleRoute(ProductController.createProduct))
    console.log('✅  Admin api ready')
  }
}

module.exports = new AdminRouter().router
