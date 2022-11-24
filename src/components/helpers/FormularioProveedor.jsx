import React from 'react'
import Input from './Input'

export default function FormularioProveedor() {
  return (
    <aside className='contenedor-fomulario-proveedor'>
        <form className='formulario-proveedor'>
          <label className='label-nombre'>{"Nombre Proveedor"}</label>
          <Input placeholder='Nombre' type={"text"}/>

          <label className='label-nit'>{"NIT"}</label>
          <Input placeholder='NIT' type={"text"} />

          <label className='label-direccion'>{"Direccion"}</label>
          <Input placeholder='Direccion' type={"text"} />

          <label className='label-telefono'>{"Telefono"}</label>
          <Input placeholder='Telefono' type={"text"} />

          <label className='label-correo'>{"Correo"}</label>
          <Input placeholder='Correo' type={"email"} />

          <label className='label-producto'>{"Nombre del producto"}</label>
          <Input placeholder='Nombre del producto' type={"text"} />

          <label className='label-descripcion'>{"Descripcion"}</label>
          <textarea></textarea>

        </form>
    </aside>
  )
}
