import React from 'react'

export default function FormularioCliente() {
  return (
    <aside className='contenedor-fomulario'>
        <form className='formulario-cliente'>
          <label className='label-nombre'>Nombre del cliente</label>
          <Input placeholder='Nombre'/>

          <label className='label-documento'>Documento</label>
          <Input placeholder='Documento' />

          <label className='label-correo'>Correo</label>
          <Input placeholder='Correo' />

        </form>
    </aside>
  )
}
