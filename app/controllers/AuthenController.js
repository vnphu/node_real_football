const AccountService = require('../services/AccountService')
const { verifyToken } = require('../utils/helpers')

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET

class AuthenController {
  async verifyToken(req, res, next) {
    const tokenFromClient = (req.header('Authorization') || req.query.token || req.get('x-access-token')).replace('Bearer ', '')
    if (tokenFromClient) {
      try {
        // giải mã token
        const decoded = await verifyToken(tokenFromClient, accessTokenSecret)
        // If token hợp lệ, lưu thông tin vao req
        req.jwtDecoded = decoded
        next()
      } catch (error) {
        return res.status(401).json({
          message: error
        })
      }
    } else {
      // Không tìm thấy token trong request
      return res.status(403).send({
        message: 'No token provided.'
      })
    }
  }
}

module.exports = new AuthenController()
