import React from 'react'
import IconoFacebook from '../helpers/IconoFacebook'
import IconoTwitter from '../helpers/IconoTwitter'
import IconoWhatssap from '../helpers/IconoWhatssap'
import Logo from '../helpers/Logo'


export default function Footer() {
  return (
    <footer className='pie-pagina'>
      <Logo />
      <p>MARÍA SUCULENTAS &#169; todos los derechos reservado</p>
      <p>Tel: 3578841 Cel: 308762587</p>
      <IconoFacebook />
      <IconoTwitter />
      <IconoWhatssap />
      
      
    
    </footer>
  )
}
