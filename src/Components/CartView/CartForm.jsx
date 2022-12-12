import React from 'react'
import { useState } from 'react'

import InputForm from './InputForm'
import "./CartForm.css"

export default function CartForm(props) {
    const [data, setData] = useState({
        nombre : "",
        mail : "",
        tel : ""
    })

    function onInpChange(e){
        let nombreInp = e.target.nombre
        let value = e.target.value

        let newData = {...data}
        newData[nombreInp] = value
        setData(newData) 
    }

    function onSubmit(e){
        e.preventDefault()
        props.onSubmit(e, data)
    }
    
  return (
    <form className='formulario' onSubmit={onSubmit}>
        <InputForm htmlFor="name" titulo="Ingresa tu nombre: " value={data.nombre} name="name" type="text" onChange={onInpChange}/>

        <InputForm htmlFor="mail" titulo="Ingresa tu e-mail:  " value={data.mail} name="name" type="email" onChange={onInpChange}/>

        <InputForm htmlFor="tel" titulo="Ingresa un teléfono  : " value={data.tel} name="name" type="number" onChange={onInpChange}/>

        <button type='submit'> Confirmar compra</button>
    </form>
  )
}
