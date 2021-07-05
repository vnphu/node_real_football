const formidable = require('formidable')

const BaseRouter = require('../base')
const ProductController = require('../../controllers/ProductController')
const AccountController = require('../../controllers/AccountController')
const UploadController = require('../../controllers/UploadController')

class ProductRouter extends BaseRouter {
  _setupRoute() {
    this.router.get('/', this._handleRoute(ProductController.getAllProducts))
    this.router.use('/create', this._handleRoute(AccountController.isAuthen))
    this.router.post('/create', this._handleRoute(ProductController.createProduct))
    this.router.post('/uploadPhoto', UploadController.uploadPhoto(), this._handleRoute(ProductController.uploadProductPhoto))
    this.router.get('/detail/:id', this._handleRoute(ProductController.getById))
    this.router.get('/category', this._handleRoute(ProductController.getProductByCategory))
    this.router.get('/filter', this._handleRoute(ProductController.filterProducts))
    this.router.get('/bestSeller', this._handleRoute(ProductController.getBestSeller))
    console.log('✅  Product api ready')
  }
}

module.exports = new ProductRouter().router
