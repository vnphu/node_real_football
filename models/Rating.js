module.exports = (sequelize, DataTypes) => {
  var Rating = sequelize.define(
    'Rating',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      review: DataTypes.STRING,
      rate: DataTypes.INTEGER
    },
    {
      tableName: 'Ratings' // Model tableName will be the same as the model name
    }
  )
  Rating.associate = function (models) {
    models.Rating.belongsTo(models.User, {
      foreignKey: 'userId',
      constraints: false
    })
    models.Rating.belongsTo(models.Product, {
      foreignKey: 'productId',
      constraints: false
    })
  }
  return Rating
}
