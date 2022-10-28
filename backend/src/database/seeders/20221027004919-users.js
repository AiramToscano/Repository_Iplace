module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
'users',
      [{
        id: 1,
        name: 'App Admin',
        email: 'adm@app.com',
        password: 'a4c86edecc5aee06eff8fdeda69e0d04',
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