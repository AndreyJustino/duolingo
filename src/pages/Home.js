import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem('login');
    if (!login) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="home-container">
      <h2>Escolha seu caminho</h2>
      <div className="lessons-grid">
        <button 
          className="lesson-button"
          onClick={() => navigate('/lesson1')}
        >
          Etapa 1
        </button>
        <button 
          className="lesson-button"
          disabled
        >
          Etapa 2
        </button>
        <button 
          className="lesson-button"
          disabled
        >
          Etapa 3
        </button>
      </div>
    </div>
  );
};

export default Home;