/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import './home.css'

import imgSobreNos from '../../assets/imgs/imagem-sobre-nos.jpg'
import icoFacebook from '../../assets/imgs/facebook.png'
import icoInstagram from '../../assets/imgs/instagram.png'
import icoWhatsapp from '../../assets/imgs/whatsapp.png'

export default function Home(){
    return(
        <main className='home'>
            <div  id='topo' className='sobre-nos'>
                    <div className='descricao'>
                        <h1>Sobre Nos</h1>
                        <p>Agir, eis a inteligência verdadeira. Serei o que quiser. 
                        Mas tenho que querer o que for. O êxito está em ter êxito, e não em ter condições de êxito. 
                        Condições de palácio tem qualquer terra larga, mas onde estará o palácio se não o fizerem ali?Agir, eis a inteligência verdadeira. 
                        Serei o que quiser. Mas tenho que querer o que for. O êxito está em ter êxito, e não em ter condições de êxito. 
                        Condições de palácio tem qualquer terra larga, mas onde estará o palácio se não o fizerem ali?Agir, eis a inteligência verdadeira. 
                        Serei o que quiser. Mas tenho que querer o que for. O êxito está em ter êxito, e não em ter condições de êxito. 
                        Condições de palácio tem qualquer terra larga, mas onde estará o palácio se não o fizerem ali?Agir, eis a inteligência verdadeira. 
                        Serei o que quiser. Mas tenho que querer o que for. O êxito está em ter êxito, e não em ter condições de êxito. 
                        Condições de palácio tem qualquer terra larga, mas onde estará o palácio se não o fizerem ali?Agir, eis a inteligência verdadeira. 
                        Serei o que quiser. Mas tenho que querer o que for. O êxito está em ter êxito, e não em ter condições de êxito. 
                        Condições de palácio tem qualquer terra larga, mas onde estará o palácio se não o fizerem ali?Agir, eis a inteligência verdadeira. 
                        </p>
                    </div>
                <img src={imgSobreNos} alt='imagem ao lado do sobre nos'/>
            </div>

            <div className='linhas-de-produtos'>
                <h1>Temos</h1>
                <div className='tipos-vendidos'>
                    
                </div>
            </div>

            <div id='contato' className='contato'>
                <h1>Contato</h1>
                <div className='conteudo-contato'>
                    <div className='info'>
                        <p><span>Endereço:</span> Marcodes Salgado 12-52</p>
                        <p><span>Telefone:</span> (14) 99199-7620</p>
                        <p><span>Email:</span> contato@chococream.com.br</p>
                        <div className='redes-socias'>
                            <img src={icoFacebook} alt='Acessar o Facebook'/>
                            <img src={icoInstagram} alt='Acessar o Instagram'/>
                            <img src={icoWhatsapp} alt='Mandar mensagem via whatsaap'/>
                        </div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.7419384568943!2d-49.06546957075794!3d-22.31705925843055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf67bc45c5936f%3A0xfbd39c27e37b33f!2sR.%20Marcondes%20Salgado%2C%2012-52%20-%20Vila%20Antarctica%2C%20Bauru%20-%20SP%2C%2017013-110!5e0!3m2!1spt-BR!2sbr!4v1628820158614!5m2!1spt-BR!2sbr"/>
                </div>
            </div>
        </main>
    )
}