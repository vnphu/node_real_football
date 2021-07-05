module.exports = (sequelize, DataTypes) => {
  var Inventory = sequelize.define(
    'Inventory',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      quantity: DataTypes.INTEGER,
      onOrderQuantity: DataTypes.INTEGER,
      reorderLevel: DataTypes.INTEGER
    },
    {
      tableName: 'Inventory' // Model tableName will be the same as the model name
    }
  )
  Inventory.associate = function (models) {
    models.Inventory.belongsTo(models.Product, {
      foreignKey: 'productId',
      constraints: false
    })
    models.Inventory.hasMany(models.StockInItem, {
      foreignKey: 'inventoryId'
    })
  }
  return Inventory
}
