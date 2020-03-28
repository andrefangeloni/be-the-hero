import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import heroes from '../../assets/heroes.png';

import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <section className="form">
        <img src={logo} alt="Be The Hero" />

        <form>
          <h1>Faça seu login</h1>
          <input placeholder="Sua ID" />
          <button type="submit" className="button">Entrar</button>

          <a href="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </a>
        </form>
      </section>

      <img src={heroes} alt="Heroes" />
    </div>
  )
};

export default Login;
