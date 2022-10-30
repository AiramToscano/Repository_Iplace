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
  } = useContext(CartContext);
  return ({ products,
    setProducts,
    filterName,
    setfilterName,
    setfilterNameOrPrice,
    filterNameOrPrice });
}

function CartProvider(prop) {
  const { children } = prop;
  const [products, setProducts] = useState([]);
  const [filterName, setfilterName] = useState('');
  const [filterNameOrPrice, setfilterNameOrPrice] = useState('');
  const value = useMemo(
    () => ({
      products,
      setProducts,
      filterName,
      setfilterName,
      filterNameOrPrice,
      setfilterNameOrPrice,
    }),
    [products, filterName, filterNameOrPrice],
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
