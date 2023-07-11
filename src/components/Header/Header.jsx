import React from 'react'
import LogoPresentacion from '../../images/LogoPresentacion.jpg'
import style from './Header.module.css';
//import lll from '../../images/asdsadasd.webp';

const Header = () => {
  return (
    <div className={style.contenedorImagen}>
        <img  src={LogoPresentacion}/>
        <div className={style.contenedorImagenTexto}>
          <h3>Hello</h3>
          <h1>I'm Rafael</h1>
          <h3>Software Developer </h3>
          
        </div>
    </div>
  )
}
export default Header;
