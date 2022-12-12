import React from 'react'


function InputForm(props) {
  return (
    <div style={{margin: 8}  }>
        <label htmlFor={props.htmlFor}>{props.titulo} </label>
        <input syle={{width:"300px"}} value={props.valor} type={props.type} name={props.name} onChange={props.onChange} required/>
    </div>
  )
}

export default InputForm    