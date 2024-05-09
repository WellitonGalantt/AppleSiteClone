import React, {useState, useEffect} from "react";
import { Header} from '../style/styled/headerStyled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import {  faApple } from '@fortawesome/free-brands-svg-icons';

function HeaderCreate(){

  const [hiddenMenu, updtHiddenMenu] = useState<string | boolean>(false)

  return(
    <>
      <Header onMouse={hiddenMenu} onMouseLeave={()=>{updtHiddenMenu(false)}}>
        <div>
          <span className="apple-logo-icon"><FontAwesomeIcon icon={faApple} /></span>
          <nav>
            <ul>
              <li><a onMouseEnter={()=>{updtHiddenMenu('loja')}}>Loja</a></li>
              <li><a onMouseEnter={()=>{updtHiddenMenu('mac')}}>Mac</a></li>
              <li><a onMouseEnter={()=>{updtHiddenMenu('ipad')}}>iPad</a></li>
              <li><a onMouseEnter={()=>{updtHiddenMenu('iphone')}}>iPhone</a></li>
              <li><a onMouseEnter={()=>{updtHiddenMenu('watch')}}>Watch</a></li>
              <li><a onMouseEnter={()=>{updtHiddenMenu('airpods')}}>AirPods</a></li>
              <li><a onMouseEnter={()=>{updtHiddenMenu('tv-casa')}}>TV e Casa</a></li>
              <li><a onMouseEnter={()=>{updtHiddenMenu('entretenimento')}}>Entretenimento</a></li>
              <li><a onMouseEnter={()=>{updtHiddenMenu('acessorios')}}>Acessorios</a></li>
              <li><a onMouseEnter={()=>{updtHiddenMenu('suporte')}}>Suporte</a></li>
            </ul>
          </nav>
          <span className="search-icon"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
          <span className="bag-shop"><FontAwesomeIcon icon={faBagShopping} /></span>
        </div>

        <div className="options-box-menu-hover">

            <p className="loja">Loja</p>
            <p className="mac">Mac</p>
            <p className="ipad">iPad</p>
            <p className="iphone">iPhone</p>
            <p className="watch">Watch</p>
            <p className="airpods">AirPods</p>
            <p className="tv-casa">TV e Casa</p>
            <p className="entretenimento">Entretenimento</p>
            <p className="acessorios">Acessorios</p>
            <p className="suporte">Suporte</p>

        </div>
      </Header>
    </>
  )
}

export default HeaderCreate