import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [noLogin, setnoLogin] = useState(false);
  const [nameLogin, setnameLogin] = useState('');

  const nameUSer = () => {
    const userId = window.localStorage.getItem('user');
    if (userId) {
      setnoLogin(true);
      const pessoaObj = JSON.parse(userId);
      setnameLogin(pessoaObj.nome);
    }
  };

  function handleLogout() {
    localStorage.removeItem('user');
    navigate('/login');
  }

  useEffect(() => {
    nameUSer();
  }, []);

  return (
    <section>
      {!noLogin && (
        <button
          onClick={ () => navigate('/login') }
          type="button"
        >
          Login
        </button>)}
      {noLogin && (
        <p>
          Bem vindo
          {' '}
          {nameLogin}
        </p>)}
      {!noLogin && (
        <button
          onClick={ () => navigate('/register') }
          type="button"
        >
          Criar Conta
        </button>
      )}
      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
        onClick={ () => handleLogout() }
      >
        Logout
      </button>
      {noLogin && (
        <button
          onClick={ () => navigate('/profile') }
          type="button"
        >
          Meu Perfil
        </button>
      )}
    </section>
  );
}

export default Navbar;
