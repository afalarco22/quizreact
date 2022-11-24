import React from 'react'
import Input from './Input'

export default function FormularioCliente() {
  return (
    <aside className='contenedor-fomulario-cliente'>
        <form className='formulario-cliente'>
          <label className='label-nombre'>{"Nombre del cliente"}</label>
          <Input placeholder='Nombre' type={"text"}/>

          <label className='label-documento'>{"Documento"}</label>
          <Input placeholder='Documento' type={"number"} />

          <label className='label-correo'>{"Correo"}</label>
          <Input placeholder='Correo' type={"email"}  />

          <label className='label-correo'>{"Direccion"}</label>
          <Input placeholder='Direccion' type={"text"}/>

          <label className='label-barrio'>{"Barrio"}</label>
          <Input placeholder='Barrio' type={"text"}  />

          <label className='label-telefono'>{"Telefono Contacto"}</label>
          <Input placeholder='Telefono' type={"text"} />

        </form>
    </aside>
  )
}
