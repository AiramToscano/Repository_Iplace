const { Op } = require('sequelize');
const { Products } = require('../database/models');

const getAllProducts = async () => {
    const foundProducts = await Products.findAll();
      return foundProducts;
  };

  const getProductsByname = async (name) => {
    const foundProducts = await Products.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    });
      return foundProducts;
  };

  const getProductByPriceOrName = async (query) => {
    const foundProducts = await Products.findAll();
    if (query === 'price') {
      const foundProductsPrice = await Products.findAll({
        order: [
          ['price'],
        ],
      });
      return foundProductsPrice;
    }
    if (query === 'name') {
      const foundProductsPrice = await Products.findAll({
        order: [
          ['name'],
        ],
      });
      return foundProductsPrice;
    }
    return foundProducts;
  };

module.exports = { getAllProducts, getProductsByname, getProductByPriceOrName };