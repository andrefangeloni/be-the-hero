import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import heroes from '../../assets/heroes.png';

import './Login.css';

const Login = () => {
  const [id, setId] = useState('');

  const history = useHistory();

  const handleLogin = async e => {
    e.preventDefault();

    try {
      const response = await api.post('/sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/home');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login-container">
      <section className="form">
        <img src={logo} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>
          <input
            value={id}
            onChange={e => setId(e.target.value)}
            placeholder="Digite seu ID"
          />
          <button type="submit" className="button">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroes} alt="Heroes" />
    </div>
  );
};

export default Login;
