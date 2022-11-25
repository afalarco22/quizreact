import React from 'react'
import ContenedorFormularios from './ContenedorFormularios'
import Informacion from '../helpers/Informacion'

export default function Main() {
  return (
    <main className='contenedor-principal'>
      <h1>"Maria SuculentaS"</h1>
      <Informacion />
      <ContenedorFormularios />
        
    </main>
  )
}
