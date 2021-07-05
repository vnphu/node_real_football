const { Product, Rating, Size, Category } = require('../../models')
const models = require('../../models')
const { PRODUCT_STATUS } = require('../utils/constant')
const { Op } = models.Sequelize

class ProductService {
  async getAllProducts(page, limit, sortMethod) {
    let order = []
    if (sortMethod) {
      order = ['price', sortMethod]
    } else order = ['price', 'ASC']
    const { count, rows: products } = await Product.findAndCountAll({
      // sua lai attribute cho dung ten trong model
      attributes: ['id', 'name', 'image', 'status', 'price', 'categoryId'],
      where: { status: PRODUCT_STATUS.ACTIVE },
      include: [
        {
          model: Rating,
          required: false,
          // as: 'rating',
          // sua lai attribute
          attributes: ['id', 'userId', 'productId', 'rate', 'review']
        }
      ],
      order: [order],
      limit: Number(limit),
      offset: Number((page - 1) * limit)
    })
    return { count, products }
  }
  // api filter san pham theo ten, tradeMark, color, gender, sap xep tang or giam
  async filteredProduct(filterBy, page, limit) {
    const options = { where: { status: PRODUCT_STATUS.ACTIVE } }
    let order = []
    if (filterBy.name) {
      options.where.name = { [Op.substring]: filterBy.name }
    }
    if (filterBy.tradeMark) {
      options.where.tradeMark = filterBy.tradeMark
    }
    if (filterBy.color) {
      options.where.color = filterBy.color
    }
    if (filterBy.categoryId) {
      options.where.categoryId = filterBy.categoryId
    }
    if (filterBy.gender) {
      options.where.sex = filterBy.gender
    }
    if (filterBy.sortMethod) {
      order = ['price', filterBy.sortMethod]
    } else order = ['price', 'ASC']
    const { count, rows: products } = await Product.findAndCountAll({
      attributes: ['id', 'name', 'tradeMark', 'image', 'price', 'categoryId'],
      where: options.where,
      order: [order],
      limit: Number(limit),
      offset: Number((page - 1) * limit)
    })
    return { count, products }
  }
  // api best seller products
  async getBestSeller() {
    let products = []
    const categories = await Category.findAll({
      attributes: ['id', 'type', 'name'],
      include: [
        {
          model: Product,
          where: { status: PRODUCT_STATUS.ACTIVE },
          attributes: ['id', 'name', 'tradeMark', 'image', 'price', 'categoryId'],
          order: models.sequelize.random(),
          limit: 2
        }
      ]
    })
    categories.forEach((element) => {
      products = products.concat(element.Products)
    })
    return products
  }
  // api create new product
  async createProduct(bodyProduct) {
    const findByNameSize = await this.findProductByNameSize(bodyProduct)
    if (findByNameSize.count > 0) {
      return { status: false, message: 'Product exist' }
    }
    const newProduct = await Product.create(bodyProduct)
    return { status: true, product: newProduct }
  }
  async findProductByNameSize(bodyProduct) {
    const { count, rows: products } = await Product.findAndCountAll({
      where: {
        name: bodyProduct.name,
        sizeId: bodyProduct.sizeId
      },
      raw: true
    })
    return { count, products }
  }
  async getProductById(id) {
    const product = await Product.findByPk(id)
    return product
  }

  async getProductByCategory(page, limit, categoryId) {
    const { count, rows: products } = await Product.findAndCountAll({
      include: [
        {
          where: { id: Number(categoryId) },
          model: Category,
          attributes: ['id', 'name', 'type', 'image', 'description']
        }
      ],
      where: { status: PRODUCT_STATUS.ACTIVE },
      limit: Number(limit),
      offset: Number((page - 1) * limit),
      order: [['updatedAt', 'DESC']]
    })
    return { count, products }
  }
}

module.exports = new ProductService()
