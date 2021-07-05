const { Category } = require('../../models')
const models = require('../../models')
class CategoryService {
  async getAllCategory() {
    const allCategory = await Category.findAll({
      attributes: ['id', 'type', 'name', 'image', 'description']
    })
    return allCategory
  }
}
module.exports = new CategoryService()
