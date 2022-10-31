import { useMemo, createContext, useContext, useState } from 'react';

const CartContext = createContext([]);

function useCart() {
  const {
    products,
    setProducts,
    filterName,
    filterNameOrPrice,
    setfilterName,
    setfilterNameOrPrice,
    product,
    setProduct,
  } = useContext(CartContext);
  return ({ products,
    setProducts,
    filterName,
    setfilterName,
    setfilterNameOrPrice,
    filterNameOrPrice,
    product,
    setProduct });
}

function CartProvider(prop) {
  const { children } = prop;
  const [products, setProducts] = useState([]);
  const [filterName, setfilterName] = useState('');
  const [product, setProduct] = useState('');
  const [filterNameOrPrice, setfilterNameOrPrice] = useState('');
  const value = useMemo(
    () => ({
      products,
      setProducts,
      filterName,
      setfilterName,
      filterNameOrPrice,
      setfilterNameOrPrice,
      product,
      setProduct,
    }),
    [products, filterName, filterNameOrPrice, product],
  );
  // useEffect(()=>{
  //   setCart(prev => []);
  // }, [products]);
  return (
    <CartContext.Provider
      value={ value }
    >
      {children}

    </CartContext.Provider>
  );
}

export {
  useCart,
  CartProvider,
};
