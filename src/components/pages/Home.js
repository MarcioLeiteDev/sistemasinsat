import React, { Component, useEffect } from 'react'
import styles from './Home.module.css'
import aos from 'aos'

import { FaCarAlt } from 'react-icons/fa'
import { FaMotorcycle } from 'react-icons/fa'

function Home() {

    useEffect(() => {
        aos.init({
            duration: 1500
        })
    })

    return (
        <>
            <div className={styles.top}>
                <div className={styles.box}  >
                    <h2>SISTEMAS INSAT</h2>
                    <p>Conheça nossas melhores opções para segurança pessoal, veicular, para frotas e
                        cargas, com rastreadores altamente tecnológicos e nunca mais se preocupe com isso.

                    </p>
                    <button data-aos="fade-up">Entre em Contato</button>
                </div>

                <div className={styles.box_atendimento} data-aos="fade-left">
                    <h2>ATENDIMENTO</h2>
                    <p>e-mail: contato@sistemasinsat.com.br</p>
                    <p>whatsapp: (11)2863-0153</p>

                </div>

            </div>

            <div className={styles.produtos}  >
                <div className={styles.box_produtos} data-aos="fade-right">
                    <h2 className="text-laranja"> <FaCarAlt /> <br />Rastreador para Carros</h2>
                    <p>Tenha controle total de seus veículos com rastreadores Insat para carros e veículos.</p>
                    <button> Mais ...</button>
                </div>
                <div className={styles.box_produtos} data-aos="fade-down">
                    <h2 className="text-laranja"> <FaMotorcycle /> <br />Rastreador para Motos</h2>
                    <p>Tenha controle total de sua moto com rastreadores Insat para motos.</p>
                    <button> Mais ...</button>
                </div>
                <div className={styles.box_produtos} data-aos="fade-left">
                    <h2 className="text-laranja"> <FaCarAlt /> <br />Rastreador para Caminhão</h2>
                    <p>Tenha controle total de seus caminhão com rastreadores Insat para caminhão.</p>
                    <button> Mais ...</button>
                </div>
            </div>


            <div className={styles.produtos}  >
                <div className={styles.box_produtos} data-aos="fade-right">
                    <h2 className="text-laranja"> <FaCarAlt /> <br />Rastreador para Carros</h2>
                    <p>Tenha controle total de seus veículos com rastreadores Insat para carros e veículos.</p>
                    <button> Mais ...</button>
                </div>
                <div className={styles.box_produtos} data-aos="fade-up">
                    <h2 className="text-laranja"> <FaMotorcycle /> <br />Rastreador para Motos</h2>
                    <p>Tenha controle total de sua moto com rastreadores Insat para motos.</p>
                    <button> Mais ...</button>
                </div>
                <div className={styles.box_produtos} data-aos="fade-left">
                    <h2 className="text-laranja"> <FaCarAlt /> <br />Rastreador para Caminhão</h2>
                    <p>Tenha controle total de seus caminhão com rastreadores Insat para caminhão.</p>
                    <button> Mais ...</button>
                </div>
            </div>

            <div className={styles.empresa}>
                <div className={styles.conteudo_empresa} data-aos="fade-up">
                    <h3>NOSSA EMPRESA</h3>
                    <p>A INSAT, empresa de rastreamento via satélite sempre estará ao seu lado.
                        Protegendo você, sua família e seu patrimônio. Nossa meta é oferecer o que há
                        de melhor em soluções, produtos e serviços, para atender e superar às suas
                        expectativas. Este é o nosso compromisso e, por isso, trabalhamos continuamente.</p>
                </div>

                <div className="conteudo_empresa" data-aos="fade-left">
                    <h3>ESPECIALIDADES</h3>
                    <p>Com 14 anos de mercado, estamos dia a dia evoluindo para melhor atende-los.</p>
                    <p>Nossas especialidades</p>
                    <ul>
                        <li> Rastreador para Carros</li>
                        <li> Rastreador para Motos</li>
                        <li> Rastreador para Caminhão</li>
                        <li> Rastreador para Frotas</li>
                        <li> Rastreador Pessoal</li>
                        <li> Rastreador para Cargas</li>

                    </ul>
                </div>

            </div>

            <div className={styles.demostracao} data-aos="fade-up">
                <h4>Acesso de Demonstração</h4>
                <p>Baixe o aplicativo pelos botões abaixo e conheça como funciona o nosso produto
                     como experiência.</p>
                     <li>1. Ao baixar o aplicativo, insira a chave de acesso “INS” (sem aspas)</li>
                     <li>2. Na área do usuário, use o login e senha “demo” (sem aspas)</li>
                     <li>3. Veja em tempo real parte do potencial do Rastreador Insat.</li>

                    <a href="http://ap3.stc.srv.br/webcliente/insat/"> <button>ACESSO PELA INTERNET</button> </a>
                    <a href="https://play.google.com/store/apps/details?id=br.com.stctecnologia.movit&pli=1"> <button>BAIXE PARA ANDROID</button> </a>
                    <a href="https://apps.apple.com/us/app/movit/id1202264750"><button>BAIXE PARA IPHONE</button> </a> 
            </div>
        </>


    )
}

export default Home