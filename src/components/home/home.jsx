import React from 'react'
import './home.css'

import boloMorango from '../../assets/imgs/bolo-morango.jpg'
import cone from '../../assets/imgs/cone.jpg'
import coneAberto from '../../assets/imgs/cone-aberto.jpg'
import bolo from '../../assets/imgs/bolo-choco.jpg'

export default function Home(props){
    return(
        <div className='home'>
            <div className='sobre-nos'>
                <div className='sobre-nos-info'>
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
                <div className='imagens'>
                    <h1>Alguns produtos</h1>
                    <div>
                        <img src={cone} alt="Cone" />
                        <img src={coneAberto} alt="Cone Aberto" />
                        <img src={bolo} alt="Bolo de Chocolate" />
                        <img src={boloMorango} alt="Bolo de morango" />
                    </div>
                </div>
            </div>
        </div>
    )
}