import React from 'react';
import logoNav from '../../images/LogoNav.png';
import './nav.css';

export const Nav = () => {
  return (
    <nav>
        <ul>
            <li><img src={logoNav}/></li>
            <li><a href="">Inicio</a></li>
            <li><a href="">Sobre mi</a></li>
            <li><a href="">Servicios</a></li>
            <li><a href="">Portafolio</a></li>
            <li><a href="">Contacto</a></li>
        </ul>
    </nav>
  )
}
