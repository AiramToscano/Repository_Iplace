import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { getStorage, clearStorage } from '../services/storage';

function Navbar() {
  const navigate = useNavigate();

  return (
    <section>
      <button
        onClick={ () => navigate('/login') }
        type="button"
      >
        Login
      </button>
      <button
        onClick={ () => navigate('/cadastro') }
        type="button"
      >
        Criar Conta
      </button>
      {/* <button
        data-testid="customer_products__element-navbar-user-full-name"
        type="button"
      >
        { userName }
      </button>
      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
        onClick={ handleLogout }
      >
        Logout
      </button> */}
    </section>
  );
}

export default Navbar;
