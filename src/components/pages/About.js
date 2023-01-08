import styles from './About.module.css'

function About(){
    return(
        <>
        <div className={styles.about}>
            <div className={styles.box} data-aos="fade-up">
                <h1>INSAT RASTREAMENTO VIA SATÉLITE</h1>
                <p>
                Conheça melhor sobre a empresa que tanto cresce no mercado. Nossa missão, 
                visão e valores agregados ao nosso comprometimento com nossos clientes.
                </p>
            </div>
        </div>

        <div className='container'>
                <div className={styles.sobre} data-aos="fade-up">
                    <h2>Sobre nós</h2>
                    <p>A Insat Rastreadores é uma empresa que vem se destacando na área de 
                        desenvolvimento e implantação de tecnologias para rastreamento e 
                        recuperaçãoe veículos. Investimos em pesquisas e operações de campo, 
                        objetivando preencher um espaço vazio e satisfazer as necessidades de
                         um mercado carente e ávido de soluções para os problemas que vem se 
                         agravando dia a dia, tais como a segurança pessoal e patrimonial, 
                         fundamentalmente no segmento automotivo.</p>
                    <p>Atuando na área de assessoria está capacitada a lhe oferecer soluções em 
                        sistemas de informações , equipamentos e marketing, assim possibilitando 
                        um sucesso garantido a seus negócios.</p>
                    <p>Somos a Insat Rastreadores, a mais confiável das empresas de rastreamento 
                        via satélite e apresentamos índices de eficiência impressionantes de 
                        recuperação de veículos. Somos homologados pela Anatel 
                        (Agência Nacional de Telecomunicações).</p>
                </div>

                <div className={styles.bem_vindo} data-aos="fade-right">
                    <h2>Seja muito bem vindo(a)!</h2>
                    <p>A INSAT SISTEMAS DE RASTREAMENTO está ao seu lado, protegendo você, sua família e 
                        seu patrimônio.</p>
                    <p>Nossa meta é oferecer o que há de melhor em soluções, produtos e serviços,
                         para atendermos e superarmos às suas expectativas. Este é o nosso 
                         compromisso e, por isso, trabalhamos continuamente.</p>
                    <p>Buscando sempre a melhoria contínua, estamos a disposição para críticas, 
                        sugestões e questionamentos/dúvidas, através do telefone (11) 2863-0153, 
                        ou e-mail: atendimento@rastreadoresinsat.com</p>
                        <p>A INSAT SISTEMAS DE RASTREAMENTO considera a transparência fundamental 
                            no relacionamento com seus clientes, e para isso nos colocamos a 
                            disposição para todos esclarecimentos que se fizerem necessários</p>
                </div>

                <div className={styles.beneficios} data-aos="fade-left">
                    <h2>Beneficios</h2>
                    <p>Os avanços logrados nas áreas das telecomunicações e informática unidas a 
                        uma irrevogável vocação de prestadores de serviço, fazem hoje da INSAT um 
                        dos destaques no mercado de consumo.</p>
                    <p>Os resultados das pesquisas podem ser traduzidos na atualidade em quatro 
                        grandes objetivos:</p>
                    <p>1. Diminuir as probabilidades de furto ou roubo de veículos;</p>
                    <p>2. Aumentar as possibilidades de recuperar veículos e cargas roubada;</p>
                    <p>3. Auxiliar na logística do controle de frotas;</p>
                    <p>4. Aprimorar os instrumentos de segurança pessoal.</p>
                    <p>Empresas de tecnologia e de operação, concessionárias, transportadoras, 
                        equipes de negócios, pais de famílias, entre outros, constituem os segmentos 
                        que estão formando parcerias com a INSAT, procurando também atender 
                        requisitos do mercado na área de segurança pessoal e patrimonial.</p>
                    <p>A maturidade tecnológica alcançada ao nível de produtos e serviços pela 
                        INSAT, transforma a empresa e seus parceiros de negócios, sejam eles 
                        representantes, distribuidores ou franqueados, em um grupo com 
                        inquestionáveis vantagens competitivas e alto valor agregado.</p>
                </div>
            </div>

        
        </>
    )
}

export default About