const responseError = require('../utils/responseError')
const BlogService = require('../services/BlogService')
const { HTTP_CODE, BLOG_STATUS } = require('../utils/constant')

class BlogController {
  async getAllBlogs(req, res) {
    try {
      const { page = 1, limit = 9, status = BLOG_STATUS.ACTIVE } = req.query
      const { count, blogs } = await BlogService.getAllBlogs(page, limit, status)
      res.status(HTTP_CODE.SUCCESS).json({
        data: blogs,
        total: count,
        limit: Number(limit),
        skip: Number((page - 1) * limit)
      })
    } catch (err) {
      res.error = err
      responseError(req, res)
    }
  }

  async getBlogBySlug(req, res) {
    try {
      const { slug } = req.params
      const blog = await BlogService.getBlogBySlug(slug)
      res.status(HTTP_CODE.SUCCESS).json(blog)
    } catch (err) {
      res.error = err
      responseError(req, res)
    }
  }
}

module.exports = new BlogController()
