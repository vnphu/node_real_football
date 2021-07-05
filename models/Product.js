module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define(
    'Product',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      tradeMark: DataTypes.STRING,
      image: DataTypes.JSON,
      color: DataTypes.STRING,
      price: DataTypes.DOUBLE,
      tag: DataTypes.STRING,
      generation: DataTypes.STRING,
      sex: DataTypes.STRING,
      status: DataTypes.STRING
    },
    {
      tableName: 'Products' // Model tableName will be the same as the model name
    }
  )
  Product.associate = function (models) {
    models.Product.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      constraints: false
    })
    models.Product.belongsTo(models.Size, {
      foreignKey: 'sizeId',
      constraints: false
    })
    models.Product.hasMany(models.Rating, {
      foreignKey: 'productId'
    })
    models.Product.hasMany(models.OrderItem, {
      foreignKey: 'productId'
    })
    models.Product.hasOne(models.Inventory, {
      foreignKey: 'productId'
    })
  }
  return Product
}
