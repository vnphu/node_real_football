module.exports = (sequelize, DataTypes) => {
  var OrderItem = sequelize.define(
    'OrderItem',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      quantity: DataTypes.INTEGER,
      unitPrice: DataTypes.DOUBLE,
      unitTax: DataTypes.DOUBLE,
      totalAmount: DataTypes.DOUBLE
    },
    {
      tableName: 'OrderItems' // Model tableName will be the same as the model name
    }
  )
  OrderItem.associate = function (models) {
    models.OrderItem.belongsTo(models.Order, {
      foreignKey: 'orderId',
      constraints: false
    })
    models.OrderItem.belongsTo(models.Product, {
      foreignKey: 'productId',
      constraints: false
    })
  }
  return OrderItem
}
