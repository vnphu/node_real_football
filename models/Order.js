module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define(
    'Order',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      deliveryAdress: DataTypes.STRING,
      receiverName: DataTypes.STRING,
      receiverPhone: DataTypes.STRING,
      totalAmount: DataTypes.DOUBLE,
      deliveryBy: DataTypes.STRING,
      status: DataTypes.INTEGER
    },
    {
      tableName: 'Orders' // Model tableName will be the same as the model name
    }
  )
  Order.associate = function (models) {
    models.Order.belongsTo(models.User, {
      foreignKey: 'userId',
      constraints: false
    }),
      models.Order.hasOne(models.Invoice, {
        foreignKey: 'orderId',
        constraints: false
      })
    models.Order.hasMany(models.OrderItem, {
      foreignKey: 'orderId'
    })
  }
  return Order
}
