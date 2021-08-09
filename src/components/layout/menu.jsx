import React from 'react'
import './menu.css'

export default function Menu(){
    return(
        <nav className='menu'>
            <ul>
                <a href='#/home'><li>Home</li></a>
                <a href='#/produtos'><li>Cardapio</li></a>
                <a href='#/delivery'><li>Delivery</li></a>
                <a href='#/contato'><li>Contato</li></a>
            </ul>
        </nav>
    )
}