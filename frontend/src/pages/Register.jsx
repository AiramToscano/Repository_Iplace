import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiRegister } from '../services/api';

function Register() {
  const STATUS_CREATED = 201;
  const MIN_LENGTH_PASSWORD = 6;
  const MAX_LENGTH_NAME = 12;
  const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const userRegister = await apiRegister(name, email, password);
    console.log(userRegister);
    if (userRegister === STATUS_CREATED) {
      setError(false);
      navigate('/login');
    }
    setError(true);
  }

  return (
    <form id="container">
      <div className="inputs">
        <input
          type="name"
          value={ name }
          onChange={ (event) => setName(event.target.value) }
        />

        <input
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
          disabled={ password.length < MIN_LENGTH_PASSWORD
             || !email.match(regex)
              || name.length < MAX_LENGTH_NAME }
          onClick={ handleSubmit }
        >
          CADASTRAR
        </button>
      </div>
      {error && (
        <div className="error-message">
          <p>
            Não foi possível fazer Register.
          </p>
        </div>
      )}
    </form>
  );
}

export default Register;
