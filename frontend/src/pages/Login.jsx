import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiLogin } from '../services/api';

function Login() {
  const MIN_LENGTH_PASSWORD = 6;
  const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  function loginClick(event) {
    prop.enviaEmail(email);
    event.preventDefault();
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const userLogin = await apiLogin(email, password);
    const pessoa = { nome: userLogin.name, id: userLogin.id };
    if (userLogin) {
      setError(false);
      window.localStorage.setItem('user', JSON.stringify(pessoa));
      navigate('/');
    }
    setError(true);
  }

  return (
    <form data-testid="container" onSubmit={ loginClick }>
      <div className="inputs">
        <input
          data-testid="common_login__input-email"
          type="email"
          value={ email }
          onChange={ (event) => setEmail(event.target.value) }
        />

        <input
          type="password"
          value={ password }
          onChange={ (event) => setPassword(event.target.value) }
          minLength="6"
        />
      </div>
      <div className="btn">
        <button
          type="submit"
          disabled={ password.length < MIN_LENGTH_PASSWORD || !email.match(regex) }
          onClick={ handleSubmit }
        >
          LOGIN
        </button>
      </div>
      {error && (
        <div className="error-message">
          <p>
            Não foi possível fazer login.
          </p>
        </div>
      )}
    </form>
  );
}

export default Login;
