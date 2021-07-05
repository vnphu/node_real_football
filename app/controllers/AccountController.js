const responseError = require('../utils/responseError')
const AccountService = require('../services/AccountService')
const { HTTP_CODE, ROLE } = require('../utils/constant')
const { validateString, validateNumber, isValidEmail, verifyToken, isFullfillForm } = require('../utils/helpers')
const jwt = require('jsonwebtoken')

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET

class AccountController {
  async getAllUsers(req, res) {
    try {
      const { page = 1, limit = 20, roleId = ROLE.NORMAL } = req.query
      const { count, accounts } = await AccountService.getAllUsers(page, limit, roleId)
      res
        .status(HTTP_CODE.SUCCESS)
        .json({ data: accounts, total: count, limit: Number(limit), skip: Number((page - 1) * limit) })
    } catch (err) {
      res.error = err
      responseError(req, res)
    }
  }

  async createAccount(req, res) {
    try {
      const { body } = req
      const bodyUser = {
        name: validateString(body.name),
        mail: isValidEmail(body.mail),
        phone: validateNumber(body.phone),
        address: validateString(body.address),
        account: validateString(body.mail),
        password: validateString(body.password),
        roleId: ROLE.NORMAL
      }

      if (!isFullfillForm(bodyUser)) {
        return res.status(HTTP_CODE.BAD_REQUEST).json({
          status: false,
          message: "Input field doesn't match required"
        })
      }
      const result = await AccountService.createAccount(bodyUser)
      res.status(HTTP_CODE.SUCCESS).json(result)
    } catch (err) {
      res.error = err
      responseError(req, res)
    }
  }

  async changeRole(req, res) {
    try {
      const bodyUser = {
        mail: req.body.mail,
        roleId: req.body.roleId
      }
      const { status, message } = await AccountService.validateAdmin(req.jwtDecoded)
      //validate admin authorized
      if (!status)
        return res.status(HTTP_CODE.BAD_REQUEST).json({
          status: false,
          message: message
        })
      // validate request input
      if (bodyUser.roleId != ROLE.MODERATOR && bodyUser.roleId != ROLE.NORMAL) {
        return res.status(HTTP_CODE.BAD_REQUEST).json({
          status: false,
          message: 'Role in request is not valid'
        })
      }
      const result = await AccountService.changeRole(bodyUser)
      if (!result.status)
        return res.status(HTTP_CODE.BAD_REQUEST).json({
          status: false,
          message: result.message
        })
      res.status(HTTP_CODE.SUCCESS).json(result)
    } catch (err) {
      res.error = err
      responseError(req, res)
    }
  }

  async login(req, res) {
    try {
      const bodyUser = {
        mail: req.body.mail,
        password: req.body.password
      }
      const result = await AccountService.login(bodyUser)
      if (!result.status) {
        return res.status(HTTP_CODE.BAD_REQUEST).json(result)
      }
      res.status(HTTP_CODE.SUCCESS).json({
        accessToken: result.accessToken,
        loginResult: result.message
      })
    } catch (err) {
      res.error = err
      responseError(req, res)
    }
  }

  async isAuthen(req, res, next) {
    // not attached in request
    if (!req.header('Authorization') && !req.query.token && !req.get('x-access-token')) {
      return res.status(403).json({
        message: 'Unauthorized.'
      })
    }
    // enclosed in request
    try {
      const tokenFromClient = (req.header('Authorization') || req.query.token || req.get('x-access-token')).replace(
        'Bearer ',
        ''
      )
      const decoded = await verifyToken(tokenFromClient, accessTokenSecret)
      const result = await AccountService.authen(decoded.data, tokenFromClient)
      if (!result.status) {
        return res.status(HTTP_CODE.BAD_REQUEST).json(result)
      }
      req.jwtDecoded = decoded.data
      next()
    } catch (error) {
      return res.status(401).json({
        message: 'Unauthorized.'
      })
    }
  }
}

module.exports = new AccountController()
