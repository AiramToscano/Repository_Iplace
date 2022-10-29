module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
'users',
      [{
        id: 1,
        name: 'Airam Toscano',
        email: 'airam@adm.com',
        password: 'c7f9750f3086ee495aa25e51dad3f338',
      }],

{
        timestamps: false,
      },
);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};