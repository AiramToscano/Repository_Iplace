import axios from 'axios';

const apiLogin = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:3004/login', { email, password });
    return response.data;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export {
  // eslint-disable-next-line import/prefer-default-export
  apiLogin,
};
