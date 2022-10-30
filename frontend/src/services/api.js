import axios from 'axios';

const apiLogin = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:3004/login', { email, password });
    return response.data;
  } catch (err) {
    return false;
  }
};

const apiRegister = async (name, email, password) => {
  try {
    const response = await axios.post('http://localhost:3004/register', { name, email, password });
    return response.status;
  } catch (err) {
    return false;
  }
};

const apiGetAllproducts = async () => {
  try {
    const response = await axios.get('http://localhost:3004/');
    return response.data;
  } catch (err) {
    return false;
  }
};

const apiFilterProductsByName = async (name) => {
  try {
    const response = await axios.post('http://localhost:3004/', { name });
    return response.data;
  } catch (err) {
    return false;
  }
};

const apiFilterProductsByNameOrPrice = async (value) => {
  try {
    const response = await axios.post('http://localhost:3004/pricesorname', { query: value });
    return response.data;
  } catch (err) {
    return false;
  }
};

export {
  // eslint-disable-next-line import/prefer-default-export
  apiLogin,
  apiRegister,
  apiGetAllproducts,
  apiFilterProductsByName,
  apiFilterProductsByNameOrPrice,
};
