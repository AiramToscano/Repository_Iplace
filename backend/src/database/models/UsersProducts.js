/* eslint-disable max-lines-per-function */
const UsersProducts = (sequelize, DataTypes) => {
  const UsersProducts = sequelize.define('UsersProducts', {
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
    }, {
      timestamps: false,
      underscored: true,
    });

  UsersProducts.associate = (models) => {
    models.Users.belongsToMany(models.Products, {
      as: 'products',
      through: UsersProducts,
      foreignKey: 'userId',
      otherKey: 'productId',
    });
    models.Products.belongsToMany(models.Users, {
      as: 'users',
      through: UsersProducts,
      foreignKey: 'productId',
      otherKey: 'userId',
    });
  };

  return UsersProducts;
};

module.exports = UsersProducts;