import React, { useCallback, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

import './Home.css';

const Home = () => {
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  const loadIncidents = useCallback(async () => {
    const { data } = await api.get('/profile', {
      headers: {
        Authorization: ongId,
      },
    });
    setIncidents(data);
  }, [ongId]);

  useEffect(() => {
    loadIncidents();
  }, [loadIncidents]);

  const handleDeleteIncident = async (id) => {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      loadIncidents();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleLogout = () => {
    localStorage.clear();

    history.push('/');
  };

  return (
    <div className="home-container">
      <header>
        <img src={logo} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>
        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button" onClick={() => handleLogout()}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </p>

            <button
              type="button"
              onClick={() => handleDeleteIncident(incident.id)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
