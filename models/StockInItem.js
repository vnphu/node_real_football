module.exports = (sequelize, DataTypes) => {
  var StockInItem = sequelize.define(
    'StockInItem',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      supplier: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      totalAmount: DataTypes.DOUBLE
    },
    {
      tableName: 'StockInItems' // Model tableName will be the same as the model name
    }
  )
  StockInItem.associate = function (models) {
    models.StockInItem.belongsTo(models.Inventory, {
      foreignKey: 'inventoryId',
      constraints: false
    })
  }
  return StockInItem
}
