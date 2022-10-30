const Products = (sequelize, DataTypes) => {
  const Products = sequelize.define(
'Products', 
{
            id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(4, 2),
    description: DataTypes.STRING,
    urlImage: DataTypes.STRING,
},
{ timestamps: false,
      underscored: true,
    },
    );

  return Products;
};

module.exports = Products;