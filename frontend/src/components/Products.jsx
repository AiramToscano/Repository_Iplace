import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiGetAllproducts } from '../services/api';
import { useCart } from '../contexts/useCards';
import Forms from './Forms';

function Products() {
  const { products, setProducts } = useCart();
  const navigate = useNavigate();
  const [details, setdetails] = useState('');
  //   const navigate = useNavigate();

  const getProducts = async () => {
    const getProductsAll = await apiGetAllproducts();
    setProducts(getProductsAll);
  };

  useEffect(() => {
    getProducts();
  }, []);

  async function handleSubmit(name) {
    setdetails(name);
  }

  async function handleSubmitAssinar(event) {
    event.preventDefault();
    const userId = window.localStorage.getItem('user');
    if (!userId) {
      navigate('/login');
    }
    if (userId) {
      console.log('aqui');
    }
  }

  return (
    <div>
      <Forms />
      {products.length !== 0 ? products.map((e) => (
        <div key={ e.id }>
          <h3>
            {e.name}
          </h3>
          <h3>
            R$
            {' '}
            {e.price}
          </h3>
          <button
            type="button"
            onClick={ () => handleSubmit(e.description) }
          >
            Ver Detalhes
          </button>
          {e.description === details ? details : null}
          <button
            type="submit"
            onClick={ handleSubmitAssinar }
          >
            Assinar
          </button>
        </div>
      )) : null}
    </div>
  );
}

export default Products;
