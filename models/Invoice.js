module.exports = (sequelize, DataTypes) => {
  var Invoice = sequelize.define(
    'Invoice',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      invoiceCode: DataTypes.STRING
    },
    {
      tableName: 'Invoices' // Model tableName will be the same as the model name
    }
  )
  Invoice.associate = function (models) {
    models.Invoice.belongsTo(models.Order, {
      foreignKey: 'orderId'
    })
  }
  return Invoice
}
