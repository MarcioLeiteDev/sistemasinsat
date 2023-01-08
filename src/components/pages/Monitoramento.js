import styles from './Monitoramento.module.css'

function Monitoramento(){
    return(
        <>
        <div className={styles.about}>
            <div className={styles.box} data-aos="fade-up">
                <h1>Monitoramento</h1>
                <p>
                Localize seu veículo
                </p>
            </div>
        </div>

        <div className='container'>
          
          <div className={styles.containerb}>
           <a href="http://ap3.stc.srv.br/webcliente/insat/"><button>ACESSO PELA INTERNET</button></a> 
          <a href="https://play.google.com/store/apps/details?id=br.com.stctecnologia.movit"><button>ACESSO PELO ANDROID</button></a>  
           <a href="https://apps.apple.com/us/app/movit/id1202264750"> <button>ACESSO PELO IPHONE</button></a>
          </div>



            </div>

        
        </>
    )
}

export default Monitoramento