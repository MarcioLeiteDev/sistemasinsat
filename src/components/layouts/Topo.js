import styles from './Topo.module.css'

import { FaMailBulk } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'

function Topo(){
    return(
        <div className={styles.topo}>
            <div className='container'>
            <p> <FaMailBulk /> atendimento@sistemasinsat.com  <FaWhatsapp />  (11)2863-0153</p>
            <p></p>
            </div>
           
        </div>
        
    )
}
export default Topo