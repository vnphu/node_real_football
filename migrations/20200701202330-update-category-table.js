module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.addColumn('Category', 'image', Sequelize.STRING),
      await queryInterface.addColumn('Category', 'description', Sequelize.TEXT)
    ])
  },

  down: async (queryInterface) => {
    return Promise.all([
      await queryInterface.removeColumn('Category', 'image'),
      await queryInterface.removeColumn('Category', 'description')
    ])
  }
}
