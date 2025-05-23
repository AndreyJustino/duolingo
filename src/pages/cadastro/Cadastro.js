import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Cadastro.css"
import LogoRiko from '../../components/LogoRiko.js'
import InputForms from '../../components/InputForms.js'
import User from '../../class/User.js'
import { ToastContainer, toast } from 'react-toastify';

function Cadastro() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();


  const fazerCadastro = (e) => {
    e.preventDefault();

    const user = new User(name, email, password)

    localStorage.setItem("user", JSON.stringify(user));

    toast.success('Cadastro Realzado Com Sucesso', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
      });

      setTimeout(() => {
        navigate("/login");
      }, 3000);

    
  };

  return (

    <div className="div_body">
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
      <div className='card-forms'>

        <LogoRiko width={"180px"} height={"180px"}/>

        <h1>Cadastre-se</h1>

        <form onSubmit={fazerCadastro} className='forms-cadastro'>
            <div>
                <InputForms forForms={"nome"} type={"text"} id={"nome"} name={"nome"} required={true} placeholder={"Digite seu nome"} textLabel={"Nome:"} props={name} setProps={setName}/>
            </div>
            <div>
                <InputForms forForms={"email"} type={"email"} id={"email"} name={"email"} required={true} placeholder={"Digite seu e-mail"} textLabel={"E-mail:"} props={email} setProps={setEmail}/>
            </div>
            <div>
                <InputForms forForms={"senha"} type={"password"} id={"senha"} name={"senha"} required={true} placeholder={"Digite sua senha"} textLabel={"Senha:"} props={password} setProps={setPassword}/>
            </div>
            <p>
              Ja tem conta? <Link to={"/login"} className='linkLogin'>Clique aqui</Link>
            </p>
            <button type="submit" className='button-cadastro'>Cadastrar</button>
        </form>

      </div>
    </div>
  )
}

export default Cadastro