import React from 'react'
import Input from './Input'
import Boton from './Boton'

export default function FormularioProveedor() {
  return (
    <aside className='contenedor-fomulario-proveedor'>
        <form className='formulario-proveedor'>
          <label className='label-nombre'>Nombre Proveedor</label>
          <Input placeholder='Nombre' type={"text"}/>

          <label className='label-nit'>Nit:</label>
          <Input placeholder='NIT' type={"text"} />

          <label className='label-direccion'>Dirección</label>
          <Input placeholder='Direccion' type={"text"} />

          <label className='label-telefono'>Teléfono</label>
          <Input placeholder='Telefono' type={"text"} />

          <label className='label-correo'>Correo electrónico</label>
          <Input placeholder='Correo' type={"email"} />

          <label className='label-producto'>Nombre del producto comprado</label>
          <Input placeholder='Nombre del producto' type={"text"} />

          <label className='label-descripcion'>Descripción</label>
          <textarea></textarea>

          <Boton />

        </form>
    </aside>
  )
}
