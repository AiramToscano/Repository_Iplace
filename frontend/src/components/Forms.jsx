import React from 'react';
import { useCart } from '../contexts/useCards';
import { apiFilterProductsByName, apiFilterProductsByNameOrPrice } from '../services/api';

import '../index.css';

function Forms() {
  const { setProducts, filterName,
    setfilterName, filterNameOrPrice, setfilterNameOrPrice } = useCart();

  async function handleSubmit(event) {
    event.preventDefault();
    const api = await apiFilterProductsByName(filterName);
    setProducts(api);
  }
  async function handleSubmitFilter(event) {
    event.preventDefault();
    const api = await apiFilterProductsByNameOrPrice(filterNameOrPrice);
    setProducts(api);
  }
  return (
    <div className="inline-bloc">
      <header className="flex">
        <form className="m-5">
          <input
            onChange={ (e) => setfilterName(e.target.value) }
            name="filterName"
            placeholder="Digite o nome do produto"
            value={ filterName }
          />
          <select
            onChange={ (e) => setfilterNameOrPrice(e.target.value) }
            value={ filterNameOrPrice }
            className="text-black m-5"
            name="filterByComp"
          >
            <option>Selecione o filtro</option>
            <option value="price">Valor da assinatura</option>
            <option value="name">Ordem alfabética</option>
          </select>
        </form>
      </header>
      <button
        type="submit"
        onClick={ handleSubmit }
      >
        Pesquisar
      </button>
      <button
        type="submit"
        onClick={ handleSubmitFilter }
      >
        Filtrar
      </button>
    </div>
  );
}

export default Forms;
