const BaseRouter = require('../base')
const AccountController = require('../../controllers/AccountController')

class AccountRouter extends BaseRouter {
  _setupRoute() {
    this.router.get('/', this._handleRoute(AccountController.getAllUsers))
    this.router.post('/register', this._handleRoute(AccountController.createAccount))
    this.router.post('/login', this._handleRoute(AccountController.login))
    this.router.use('/changeRole', this._handleRoute(AccountController.isAuthen))
    this.router.post('/changeRole', this._handleRoute(AccountController.changeRole))
    console.log('✅  Account api ready')
  }
}

module.exports = new AccountRouter().router
