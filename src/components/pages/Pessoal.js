import React, { Components , useEffect } from 'react'
import styles from './Pessoal.module.css'
import aos from 'aos'

import { FaMobile } from 'react-icons/fa'
import { FaGlobe } from 'react-icons/fa'
import { FaDatabase } from 'react-icons/fa'
import { FaStreetView } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'

function Pessoal(){
 
    useEffect(() => {
        aos.init({
            duration: 1500
        })
    })

    return(
        <>
        <div className={styles.top}>
        <div className={styles.box} data-aos="fade-right">
            
           <h2> Rastreador Pessoal</h2> 
           <p>Tenha controle total de seu pessoal com rastreadores 
            Insat.</p>
        </div>

        <div className={styles.box_atendimento} data-aos="fade-left">
           
           <p>Monitoramento (11)2863-0153</p>
           <p>Vendas (11)2863-0153</p>
           <p>WhatsApp</p>
        </div>


        </div>

<div className={styles.content}>
    
    <h2 data-aos="fade-down">Rastreador para Pessoas </h2>
<p>Rastreamento via satélite para Pessoas, localização da seu Pessoas via internet ou 
    app, confira abaixo o que nosso rastreador é capaz</p>
</div>

<div className={styles.content_box}>
        <div className={styles.box} data-aos="fade-right">
       <div className={styles.icones}> <FaMobile /> </div>
           <h5>LOCALIZAÇÃO DO VEÍCULO VIA INTERNET OU APP</h5>
           <p>Você pode localizar seu veículo 24 horas por dia via internet ou celular.</p>
        </div>

        <div className={styles.box} data-aos="fade-down">
        <div className={styles.icones}> <FaGlobe /> </div>
           <h5>CENTRAL DE MONITORAMENTO 24 HORAS</h5>
           <p>Em caso de roubo ou localização de seu veículo, você conta com uma central de 
            monitoramento 24 horas por dia, basta ligar em nosso 0800 ligação gratuita, 
            informar a placa de seu veículo e nossa central vai prestar o atendimento necessário
             para a localização e recuperação do veículo juntamente com a polícia militar local.</p>
         
        </div>

        <div className={styles.box} data-aos="fade-up">
        <div className={styles.icones}> <FaDatabase /> </div>
           <h5>HISTÓRICO DE POSIÇÕES E VELOCIDADE</h5>
           <p>A cada 2 minutos o equipamento GPS informa a posição de latitude e longitude para 
            nosso software central, onde ficam armazenadas todas as posições para consultas até 
            os últimos 360 dias, havendo necessidade de históricos mais longos, devesse verificar 
            junto ao nosso setor administrativo a possibilidade de disponibilização dos dados.</p>
        </div>

        <div className={styles.box} data-aos="fade-left">
        <div className={styles.icones}> <FaStreetView /> </div>
           <h5>CERCAS ELETRÔNICAS</h5>
           <p>Você poderá delimitar uma área ou região onde seu veículo opera, ou até se deixar 
            a mesma estacionada, havendo o deslocamento do veículo para outra área você será 
            informado no app e no site de rastreamento imediatamente sobre o deslocamento do 
            veículo.</p>
        </div>


</div>

<div className={styles.content_box}>

<div className={styles.box_contato} data-aos="fade-left"> 
<h2 className='text-laranja'>Faça Cotação Online, receba informações agora</h2>
</div>
<div className={styles.box_contato} data-aos="fade-up"> 
<div>
    <h2>WhatsApp</h2>
    <p>Atendimento via WhatsApp</p>
   <a href='https://wa.me/551128630153' target="blank"> <h1 className={styles.green}> <FaWhatsapp /></h1></a>
</div>
</div>
    
</div>



</>
    )
}
export default Pessoal