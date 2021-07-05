module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define(
    'Category',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      type: DataTypes.STRING,
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.TEXT
    },
    {
      tableName: 'Category' // Model tableName will be the same as the model name
    }
  )
  Category.associate = function (models) {
    models.Category.hasMany(models.Product, {
      foreignKey: 'categoryId'
    })
  }
  return Category
}
