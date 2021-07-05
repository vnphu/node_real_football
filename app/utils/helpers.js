const crypto = require('crypto')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const multer = require('multer')

const rounds = parseInt(process.env.SALT_ROUND)

module.exports = {
  validateString: (string, isNull = 1) => {
    let currentValue = isNull ? null : undefined
    return string && string.length > 0 && typeof string === 'string' ? string.trim() : currentValue
  },

  validateNumber: testNumber => {
    testNumber = typeof testNumber === 'string' ? testNumber.trim() : testNumber
    testNumber = typeof testNumber === 'boolean' ? undefined : testNumber
    return (testNumber || testNumber === 0) && !isNaN(testNumber) ? parseInt(testNumber) : undefined
  },

  isValidEmail: email => {
    let emailRegEx = /^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
    return emailRegEx.test(email) ? email : undefined
  },
  generateHash: password => {
    return bcrypt.hash(password, rounds, null)
  },
  compareHash: (inputPass, accountPass) => {
    return bcrypt.compareSync(inputPass, accountPass)
  },
  generateToken: (user, secretSignature) => {
    // user data need to put into token
    const userData = {
      name: user.name,
      mail: user.mail,
      phone: user.phone,
      address: user.address
    }
    return jwt.sign({ data: userData }, secretSignature, {
      algorithm: 'HS256',
      expiresIn: '1h'
    })
  },

  verifyToken: (token, secretKey) => {
    return jwt.verify(token, secretKey)
  },
  isFullfillForm: form => {
    let check = true
    for (let value of Object.values(form)) {
      check = check && value
    }
    return check
  }
  // uploadPhoto: () => {
  //   try {
  //     let storage = multer.diskStorage({
  //       destination: function(req, file, callback) {
  //         callback(null, './upload')
  //       },
  //       filename: function(req, file, callback) {
  //         let filename = Date.now() + '-' + file.originalname
  //         callback(null, filename)
  //       }
  //     })
  //     let upload = multer({
  //       storage: storage,
  //       fileFilter: function(req, file, cb) {
  //         let field = file.fieldname
  //         if (field !== 'photo') {
  //           return cb(new Error("Field of file must be 'photo'"))
  //         }
  //         cb(null, true)
  //       }
  //     }).array('photo', 12)
  //     return upload
  //   } catch (err) {
  //     res.error = err
  //     responseError(req, res)
  //   }
  // }
}
