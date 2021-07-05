module.exports = (sequelize, DataTypes) => {
  var Size = sequelize.define(
    'Size',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING
    },
    {
      tableName: 'Size' // Model tableName will be the same as the model name
    }
  )
  Size.associate = function (models) {
    models.Size.hasMany(models.Product, {
      foreignKey: 'sizeId'
    })
  }
  return Size
}
