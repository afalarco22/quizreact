import React from 'react'
import FormularioCliente from '../helpers/FormularioCliente'
import FormularioProveedor from '../helpers/FormularioProveedor'
import FormularioProducto from '../helpers/FormularioProducto'

export default function ContenedorFormularios() {
  return (
    <section className='contenedor-formularios'>
        <FormularioCliente />
        <FormularioProveedor />
        <FormularioProducto />

    </section>
  )
}
