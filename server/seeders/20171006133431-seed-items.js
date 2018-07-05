module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', [
      {
        name: 'Item 1',
        active: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Item 2',
        active: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items', [{}], {});
  }
};
