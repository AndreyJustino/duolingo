import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import LogoRiko from '../../components/LogoRiko.js';
import InputForms from '../../components/InputForms.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const fazerLogin = (e) => {
    e.preventDefault(); 
    
    const user = JSON.parse(localStorage.getItem('user')) || {};

    if (email && user.email == email && user.senha == password) {
      toast.success('Login realizado com sucesso!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });

      localStorage.setItem("login", true)

      setTimeout(() => {
        navigate("/home");
      }, 3000);

    } else {
      toast.error('E-Mail ou Senha Incorreto', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
    }
    
  };

  return (
    <div className="login-container">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />

      <div className="card-forms">
        
        <LogoRiko/>

        <h1>Faça login</h1>

        <form onSubmit={fazerLogin} className='forms-cadastro'>

          <div>
            <InputForms forForms={"email"} type={"email"} id={"email"} name={"email"} required={true} placeholder={"Digite seu email"} props={email} setProps={setEmail}/>
          </div>

          <div>
            <InputForms forForms={"senha"} type={"password"} id={"senha"} name={"senha"} required={true} placeholder={"Digite sua senha"} props={password} setProps={setPassword}/>
          </div>
          <p>
            Não tem uma conta? <Link to={"/"} className='linkCadastro'>Clique aqui</Link>
          </p>
        
          <button type="submit" className='button-cadastro'>Vamos começar?</button>
        </form>
      </div>
    </div>
  );
};

export default Login; 