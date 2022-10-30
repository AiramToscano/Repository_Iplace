import React from 'react';

import '../index.css';

function Forms() {
  return (
    <div className="inline-bloc">
      <header className="flex">
        <form className="m-5">
          <input
            // onChange={ (e) => filterName(e.target.value) }
            name="filterByName"
            placeholder="Digite o nome do produto"
            id="teste"
            // value={ filterByName }
            data-testid="name-filter"
          />
          <select
            onChange={ (e) => filterComp(e.target.value) }
            // value={ filterByComp }
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
        type="button"
      >
        Pesquisar
      </button>
      <button
        type="button"
      >
        Filtrar
      </button>
    </div>
  );
}

export default Forms;
