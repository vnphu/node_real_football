module.exports = (sequelize, DataTypes) => {
  var Blog = sequelize.define(
    'Blog',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      image: {
        type: DataTypes.STRING
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      status: DataTypes.INTEGER,
      slug: {
        type: DataTypes.STRING
      }
    },
    {
      tableName: 'Blog' // Model tableName will be the same as the model name
    }
  )
  Blog.associate = function (models) {
    models.Blog.belongsTo(models.User, {
      foreignKey: 'userId',
      constraints: false
    })
  }
  return Blog
}
