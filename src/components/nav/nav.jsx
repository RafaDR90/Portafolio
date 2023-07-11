import React from 'react';
import logoNav from '../../images/LogoNav.png';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.ContenedorNav}>
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
export default Nav;