const HTTP_CODE = {
  SUCCESS: 200,
  BAD_REQUEST: 401,
  PERMISSION: 403
}
// sua lai const status (datatype la string - not interger)
const PRODUCT_STATUS = {
  ACTIVE: 'active',
  PENDING: 'pending',
  EXPIRED: 'expired',
  OUT_OF_STOCK: 'out of stock',
  ARCHIVED: 'archived'
}

const ROLE = {
  ADMIN: 1,
  MODERATOR: 2,
  NORMAL: 3
}

const BLOG_STATUS = {
  ACTIVE: 1,
  EDITED: 2,
  PENDING: 3
}

module.exports = { HTTP_CODE, PRODUCT_STATUS, ROLE, BLOG_STATUS }
