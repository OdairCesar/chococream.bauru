import React from 'react'
import './menu.css'

export default function Menu(){
    return(
        <nav className='menu'>
            <ul>
                <a href='./#topo'><li>Home</li></a>
                <a href='./#tipos'><li>Tipos</li></a>
                <a href='/compras'><li>Comprar</li></a>
                <a href='./#contato'><li>Contato</li></a>
            </ul>
        </nav>
    )
}