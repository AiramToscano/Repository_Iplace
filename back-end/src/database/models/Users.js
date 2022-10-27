const Users = (sequelize, DataTypes) => {
  const UsersData = sequelize.define('Users', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
  }, {
      timestamps: false,
      underscored: true,
  });

  //   Users.associate = (models) => {
  //     Users.hasMany(models.Sales, { as: 'sales', foreignKey: 'userId' });
  //     Users.hasMany(models.Sales, { as: 'sales', foreignKey: 'sellerId' });
  // };

  return UsersData;
};

module.exports = Users;