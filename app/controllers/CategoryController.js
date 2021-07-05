const responseError = require('../utils/responseError')
const CategoryService = require('../services/CategoryService')
const { HTTP_CODE } = require('../utils/constant')
class CategoryController {
  async getAllCategory(req, res) {
    try {
      const category = await CategoryService.getAllCategory()
      res.status(HTTP_CODE.SUCCESS).json(category)
    } catch (err) {
      res.error = err
      responseError(req, res)
    }
  }
}
module.exports = new CategoryController()
