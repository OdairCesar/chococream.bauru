import React from 'react'

import Menu from './menu'
import './header.css'

import logo from '../../assets/imgs/logo.jpg'
import menu from '../../assets/imgs/icones/menu.png'

export default function Header(){
    return(
        <header className='header-pagina'>
            <img className='logo' src={logo} alt='logo-tipo' />
            <Menu />
             <img className='img-menu' src={menu} alt='abrir menu'/>
        </header>
        
    )
}