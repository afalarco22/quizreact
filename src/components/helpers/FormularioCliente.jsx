import React from 'react'
import Boton from './Boton'
import Input from './Input'


export default function FormularioCliente() {
  return (
    <aside className='contenedor-fomulario-cliente'>
        <form className='formulario-cliente'>
          <label className='label-nombre'>Nombre Cliente</label>
          <Input placeholder='Nombre' type={"text"}/>

          <label className='label-documento'>Documento</label>
          <Input placeholder='Documento' type={"number"} />

          <label className='label-correo'>Correo</label>
          <Input placeholder='Correo' type={"email"}  />

          <label className='label-correo'>Dirección</label>
          <Input placeholder='Direccion' type={"text"}/>

          <label className='label-barrio'>Barrio</label>
          <Input placeholder='Barrio' type={"text"}  />

          <label className='label-telefono'>Telefono de contacto</label>
          <Input placeholder='Telefono' type={"text"} />

          <Boton />

        </form>
    </aside>
  )
}
