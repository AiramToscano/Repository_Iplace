import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';
import { createUserProducts } from '../services/api';
// import { apiLogin } from '../services/api';

function Profile() {
  const [product, setproduct] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const getProduct = () => {
    const newProduct = window.localStorage.getItem('product');
    const productObj = JSON.parse(newProduct);
    setproduct(productObj);
  };

  const handleSubmitAssinar = async () => {
    const userId = window.localStorage.getItem('user');
    const pessoaObj = JSON.parse(userId);
    const api = await createUserProducts(pessoaObj.id, product.id);
    if (!api) {
      setError(true);
    }
    if (api === '') {
      navigate('/meuperfil');
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <Navbar />
      <h3>
        {product.name}
      </h3>
      <h3>
        R$
        {' '}
        {product.price}
      </h3>
      <h4>
        {product.description}
      </h4>
      <button
        type="button"
        onClick={ () => handleSubmitAssinar() }
      >
        Assinar
      </button>
      {error && (<>Não foi possível assinar, pois voce ja possui assinatura</>)}
    </div>
  );
}

export default Profile;
