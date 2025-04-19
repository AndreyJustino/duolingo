import React from 'react'

export default function InputForms({forForms, type, id, name, placeholder, required, textLabel, props, setProps}) {
  return (
    <div>
        <label htmlFor={forForms}>{textLabel}</label>
        <input type={type} id={id} name={name} required={required} placeholder={placeholder} value={props} onChange={(e) => setProps(e.target.value)}/>
    </div>
  )
}
