const { Blog } = require('../../models')
const { BLOG_STATUS } = require('../utils/constant')
class BlogService {
  async getAllBlogs(page, limit, status) {
    const { count, rows: blogs } = await Blog.findAndCountAll({
      where: { status },
      order: [['updatedAt', 'DESC']],
      limit: Number(limit),
      offset: Number((page - 1) * limit)
    })
    return { count, blogs }
  }

  async getBlogBySlug(slug) {
    const blog = await Blog.findOne({ where: { slug } })
    return blog
  }
}

module.exports = new BlogService()
