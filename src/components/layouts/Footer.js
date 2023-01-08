import styles from './Footer.module.css'
import React, { Component , useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import aos from 'aos'

function Footer() {

    useEffect(() => {
        aos.init({
            duration:1500
        })
    })

    return (
        <footer className={styles.footer}>

            <div className={styles.box} data-aos="fade-up">
                <h3>PROTEJA SEU MAIOR BEM AGORA MESMO</h3>
                <p>Entre em contato e solicite o rastreador que mais atende suas necessidades</p>
            <a href="https://wa.me/551128630153" target="blank">  <button data-aos="fade-up"> <FaWhatsapp />Entre em Contato</button></a>
            </div>
           
        </footer>
    )
}

export default Footer