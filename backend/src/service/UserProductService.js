const { UsersProducts } = require('../database/models');

const createUserProducts = async ({ userId, productId }) => {
  try {
    const createNewSaleProducts = await UsersProducts.create({
      userId, 
      productId,
    });
      return createNewSaleProducts;
  } catch (e) {
    return false;
  }
};

module.exports = { createUserProducts };