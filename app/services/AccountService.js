const moment = require('moment')
const helper = require('../utils/helpers')
const { User } = require('../../models')
const { ROLE } = require('../utils/constant')
const models = require('../../models')

const { Op } = models.Sequelize

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET
const SALT_ACCOUNT_FACTOR = 10

class AccountService {
  async getAllUsers(page, limit, roleId) {
    const { count, rows: accounts } = await User.findAndCountAll({
      // sua lai attribute cho dung ten trong model
      attributes: ['id', 'name', 'mail', 'phone', 'address', 'account', 'roleId', 'createdAt', 'updatedAt'],
      where: { roleId },
      order: [['updatedAt', 'DESC']],
      limit: Number(limit),
      offset: Number((page - 1) * limit)
    })
    return { count, accounts }
  }

  async createAccount(bodyUser) {
    const findByEmail = await this.findAccountByMail(bodyUser)
    if (findByEmail.count > 0) {
      return { status: false, message: 'Email used' }
    }
    bodyUser.password = await helper.generateHash(bodyUser.password)
    const newUser = await User.create(bodyUser)
    return { status: true, message: newUser.name }
  }
  async login(bodyUser) {
    const { count, accounts } = await this.findAccountByMail(bodyUser)
    if (!count) {
      return { status: false, message: 'Account is not created' }
    }
    let checkPassword = await helper.compareHash(bodyUser.password, accounts[0].password)
    if (!checkPassword) {
      return { status: false, message: 'Password is not correct' }
    }
    const accessToken = await helper.generateToken(accounts[0], accessTokenSecret)
    await User.update(
      { accessToken: accessToken },
      {
        where: { mail: bodyUser.mail }
      }
    )
    return {
      status: true,
      accessToken: accessToken,
      message: 'Login sucessfully'
    }
  }
  async authen(bodyUser, accessToken) {
    const { count, accounts } = await this.findAccountByMail(bodyUser)
    if (!count) {
      return { status: false, message: 'Account is not created' }
    }
    let checkToken = accounts[0].accessToken
    if (checkToken !== accessToken) {
      return { status: false, message: 'Unauthorized' }
    }
    return {
      status: true,
      message: 'Successfully'
    }
  }
  async findAccountByName(bodyUser) {
    const { count, rows: accounts } = await User.findAndCountAll({
      where: { name: bodyUser.name },
      raw: true
    })
    return { count, accounts }
  }
  async findAccountByMail(bodyUser) {
    const { count, rows: accounts } = await User.findAndCountAll({
      where: { mail: bodyUser.mail },
      raw: true
    })
    return { count, accounts }
  }
  async validateAdmin(jwtDecoded) {
    const { count, accounts } = await this.findAccountByMail(jwtDecoded)
    if (!count || accounts[0].roleId != ROLE.ADMIN) {
      return { status: false, message: 'Your account is not authorized for this action' }
    }
    return { status: true, message: 'Admin authorized' }
  }

  async changeRole(bodyUser) {
    const { count, accounts } = await this.findAccountByMail(bodyUser)
    if (!count) {
      return { status: false, message: 'Account is not created' }
    }
    await User.update(
      { roleId: bodyUser.roleId },
      {
        where: { mail: bodyUser.mail }
      }
    )
    return { status: true, message: 'Updated role' }
  }
}

module.exports = new AccountService()
