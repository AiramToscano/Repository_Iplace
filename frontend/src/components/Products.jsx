import React, { useEffect } from 'react';
import { apiGetAllproducts } from '../services/api';
import { useCart } from '../contexts/useCards';
import Forms from './Forms';

function Products() {
  const { products, setProducts } = useCart();
  //   const navigate = useNavigate();

  const getProducts = async () => {
    const getProductsAll = await apiGetAllproducts();
    setProducts(getProductsAll);
  };

  useEffect(() => {
    getProducts();
  }, []);

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
        </div>
      )) : null}
    </div>
  );
}

export default Products;
