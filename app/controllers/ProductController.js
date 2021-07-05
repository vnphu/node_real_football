const fs = require('fs')

const { Product } = require('../../models')
const responseError = require('../utils/responseError')
const ProductService = require('../services/ProductService')
const AccountService = require('../services/AccountService')
const { HTTP_CODE, PRODUCT_STATUS } = require('../utils/constant')
const { validateString, validateNumber, isValidEmail, isFullfillForm, uploadPhoto } = require('../utils/helpers')

class ProductController {
  async createProduct(req, res) {
    try {
      const { status, message } = await AccountService.validateAdmin(req.jwtDecoded)
      //validate admin authorized
      if (!status)
        return res.status(HTTP_CODE.BAD_REQUEST).json({
          status: false,
          message: message
        })
      const { body } = req
      const bodyProduct = {
        name: validateString(body.name),
        description: validateString(body.desc),
        tradeMark: validateString(body.tradeMark),
        image: body.image,
        color: validateString(body.color),
        price: validateNumber(body.price),
        tag: validateString(body.tag),
        generation: validateString(body.generation),
        sex: validateString(body.gender),
        status: PRODUCT_STATUS.ACTIVE,
        categoryId: validateNumber(body.categoryId),
        sizeId: validateNumber(body.sizeId)
      }
      if (!isFullfillForm(bodyProduct)) {
        return res.status(HTTP_CODE.BAD_REQUEST).json({
          status: false,
          message: "Input field doesn't match required"
        })
      }
      const result = await ProductService.createProduct(bodyProduct)
      res.status(HTTP_CODE.SUCCESS).json(result)
    } catch (err) {
      res.error = err
      responseError(req, res)
    }
  }

  async getAllProducts(req, res) {
    try {
      const { page = 1, limit = 16, sortMethod } = req.query
      const { count, products } = await ProductService.getAllProducts(page, limit, sortMethod)
      res.status(HTTP_CODE.SUCCESS).json({
        data: products,
        total: count,
        limit: Number(limit),
        skip: Number((page - 1) * limit)
      })
    } catch (err) {
      res.error = err
      responseError(req, res)
    }
  }

  async filterProducts(req, res) {
    try {
      const { page = 1, limit = 16 } = req.query
      const filterBy = {
        name: req.query.name,
        tradeMark: req.query.tradeMark,
        color: req.query.color,
        categoryId: req.query.categoryId,
        sortMethod: req.query.sort,
        gender: req.query.gender
      }

      const { count, products } = await ProductService.filteredProduct(filterBy, page, limit)
      res.status(HTTP_CODE.SUCCESS).json({
        data: products,
        total: count,
        limit: limit,
        skip: Number((page - 1) * limit)
      })
    } catch (err) {
      res.error = err
      responseError(req, res)
    }
  }

  async getBestSeller(req, res) {
    try {
      const products = await ProductService.getBestSeller()
      res.status(HTTP_CODE.SUCCESS).json(products)
    } catch (err) {
      res.error = err
      responseError(req, res)
    }
  }

  async uploadProductPhoto(req, res) {
    try {
      let images = req.files.map(file => file.filename)
      const { body } = req
      const product = await Product.findByPk(body.productId)
      if (!product) {
        images.forEach(image => {
          let path = './upload/' + image
          fs.unlink(path, err => {
            throw err
          })
        })
        return res.status(HTTP_CODE.BAD_REQUEST).json({
          status: false,
          message: 'Cannot find product'
        })
      }
      images.forEach(image => console.log('../../upload' + image))
      const updateProduct = await product.update({ image: images })
      res.status(HTTP_CODE.SUCCESS).json({
        productId: product.id,
        images: images
      })
    } catch (err) {
      res.error = err
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params
      const product = await ProductService.getProductById(id)
      res.status(HTTP_CODE.SUCCESS).json(product)
    } catch (err) {
      res.err = err
      responseError(req, res)
    }
  }

  async getProductByCategory(req, res) {
    try {
      const { page = 1, limit = 20, id } = req.query
      const { count, products } = await ProductService.getProductByCategory(page, limit, id)
      res.status(HTTP_CODE.SUCCESS).json({
        data: products,
        total: count,
        limit: Number(limit),
        skip: Number((page - 1) * limit)
      })
    } catch (err) {
      res.error = err
      responseError(req, res)
    }
  }
}

module.exports = new ProductController()
