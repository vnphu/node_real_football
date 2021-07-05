const multer = require('multer')

class UploadController {
  uploadPhoto() {
    try {
      let storage = multer.diskStorage({
        destination: function (req, file, callback) {
          callback(null, './upload')
        },
        filename: function (req, file, callback) {
          let filename = Date.now() + '-' + file.originalname
          callback(null, filename)
        }
      })
      let upload = multer({
        storage: storage,
        fileFilter: function (req, file, cb) {
          let field = file.fieldname
          if (field !== 'photo') {
            return cb(new Error("Field of file must be 'photo'"))
          }
          cb(null, true)
        }
      }).array('photo', 12)
      return upload
    } catch (err) {
      res.error = err
      responseError(req, res)
    }
  }
}
module.exports = new UploadController()
