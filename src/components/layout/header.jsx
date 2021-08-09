import React from 'react'
import Menu from './menu'
import './header.css'
import logo from '../../assets/imgs/logo.jpg'

export default function Header(){
    return(
        <div className='header-pagina'>
            <header>
                <img src={logo} alt='logo-tipo' />
                <Menu />
            </header>
        </div>
    )
}