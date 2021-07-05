const BaseRouter = require('../base')
const BlogController = require('../../controllers/BlogController')

class BlogRouter extends BaseRouter {
  _setupRoute() {
    this.router.get('/', this._handleRoute(BlogController.getAllBlogs))
    this.router.get('/:slug', this._handleRoute(BlogController.getBlogBySlug))
    console.log('✅  Blog api ready')
  }
}

module.exports = new BlogRouter().router
