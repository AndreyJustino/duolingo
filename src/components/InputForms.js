import React from 'react'

export default function InputForms({forForms, type, id, name, placeholder, required, textLabel}) {
  return (
    <div>
        <label for={forForms}>{textLabel}</label>
        <input type={type} id={id} name={name} required={required} placeholder={placeholder}/>
    </div>
  )
}
