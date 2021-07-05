const BaseRouter = require('../base')
const CategoryController = require('../../controllers/CategoryController')

class CategoryRouter extends BaseRouter {
  _setupRoute() {
    this.router.get('/', this._handleRoute(CategoryController.getAllCategory))
    console.log('✅  Category api ready')
  }
}

module.exports = new CategoryRouter().router
