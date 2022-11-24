import React from 'react'
import FormularioCliente from '../helpers/FormularioCliente'
import FormularioProveedor from '../helpers/FormularioProveedor'

export default function Main() {
  return (
    <main className='contenedor-principal'>
        <FormularioCliente />
        <FormularioProveedor />
    


    </main>
  )
}
