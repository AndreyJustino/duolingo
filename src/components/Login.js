import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const fazerLogin = (e) => {
    // preventDefault impede o comportamento padrão da página
    e.preventDefault();
    // Dados fakes. Uma aplicação real precisaria de mais recursos. 
    
    if (email && password) { //verifico se o campos email && passaword foram preenchidos
      navigate('/home');
    } else {
      alert('Precisamos preencher todos os campos');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img 
          src="../images/Generic_Logo.svg"
          alt="Logo do Projeto" 
          className="logo"
        />
        <h2>Aprender é bom.</h2>
        <form onSubmit={fazerLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Vamos começar?</button>
        </form>
      </div>
    </div>
  );
};

export default Login; 