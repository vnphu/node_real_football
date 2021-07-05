function responseError(req, res) {
  let err = res.error
  let message = err.message || 'Error'
  let status = err.statusCode || 500
  let code = err.code || status
  console.error('ERROR AT REQUEST:', req.method, req.originalUrl)
  console.error('PARAMS:', req.body)
  if (err && err.stack) {
    console.error(err.stack)
    err = err.stack
  }
  res.status(status).json({
    status,
    message,
    code,
    error: true
  })
}

module.exports = responseError
