module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
    'User',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
      mail: { type: DataTypes.STRING, allowNull: false },
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      account: { type: DataTypes.STRING, allowNull: false },
      password: DataTypes.STRING,
      activeCode: DataTypes.STRING,
      accessToken: DataTypes.STRING,
      refreshToken: DataTypes.INTEGER,
      roleId: DataTypes.INTEGER
    },
    {
      tableName: 'Users' // Model tableName will be the same as the model name
    }
  )
  User.associate = function (models) {
    models.User.hasMany(models.Blog, {
      foreignKey: 'userId'
    })
    models.User.hasMany(models.Order, {
      foreignKey: 'userId'
    })
    models.User.hasMany(models.Rating, {
      foreignKey: 'userId'
    })
  }
  return User
}
