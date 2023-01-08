import React, { Component , useEffect } from 'react'
import styles from './Navbar.module.css'

import { Link } from 'react-router-dom'

import { FaHome } from 'react-icons/fa'
import { FaInfo } from 'react-icons/fa'
import { FaSatellite } from 'react-icons/fa'
import { FaUserSecret } from 'react-icons/fa'
import { FaSpinner } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'

import aos from 'aos'

function Navbar() {

  useEffect(() => {
    aos.init({
      duration: 1500
    })
  })
  return (


    <nav class="navbar navbar-expand-lg navbar-light bg-branci">
      <a class="navbar-brand" href="#">
        <Link to="/"> <img src="/image/logo.png" data-aos="fade-right" width="200" /></Link>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"><Link to="/" className={styles.linka}> <FaHome /> Home </Link>  <span class="sr-only">(Página atual)</span></a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#"><Link to="/quem-somos" className={styles.linka}> <FaInfo /> Quem Somos </Link> </a>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" className={styles.linka} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <FaSatellite /> Produtos
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">

              <a class="dropdown-item"><Link to="/rastreador-carro">Rastreador Carro </Link> </a>
              <a class="dropdown-item"><Link to="/rastreador-moto">Rastreador Moto </Link> </a>
              <a class="dropdown-item"><Link to="/rastreador-caminhao">Rastreador Caminhão </Link> </a>
              <a class="dropdown-item"><Link to="/rastreador-frotas">Rastreador Frotas </Link> </a>
              <a class="dropdown-item"><Link to="/rastreador-pessoal">Rastreador Pessoal </Link> </a>
              <a class="dropdown-item"><Link to="/rastreador-cargas">Rastreador Cargas </Link> </a>



            </div>
          </li>


          <li class="nav-item">
            <a class="nav-link" href="#"><Link to="/monitoramento" className={styles.linka}> <FaUserSecret /> Monitoramento </Link> </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#"><Link to="/contato" className={styles.linka}> <FaPhone /> Contato </Link> </a>
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar