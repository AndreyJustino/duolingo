import React from 'react'
import "./Cadastro.css"
// import LogoRiko from "../img/rikoGuim.png"
import LogoRiko from '../components/LogoRiko.js'
import InputForms from '../components/InputForms.js'

function Cadastro() {
  return (
    <div className="div_body">
      <div className='card-forms'>

        <LogoRiko/>

        <form action="#" method="POST" className='forms-cadastro'>
            <div>
                <InputForms forForms={"nome"} type={"text"} id={"nome"} name={"nome"} required={true} placeholder={"Digite seu nome"} textLabel={"Nome:"}/>
            </div>
            <div>
                <InputForms forForms={"email"} type={"email"} id={"email"} name={"email"} required={true} placeholder={"Digite seu e-mail"} textLabel={"E-mail:"}/>
            </div>
            <div>
                <InputForms forForms={"senha"} type={"password"} id={"senha"} name={"senha"} required={true} placeholder={"Digite sua senha"} textLabel={"Senha:"}/>
            </div>
            <button type="submit" className='button-cadastro'>Cadastrar</button>
        </form>

      </div>
    </div>
  )
}

export default Cadastro