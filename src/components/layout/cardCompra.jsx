import React from 'react'
import './cardCompra.css'

export default function CardCompra(props){
    const { imagem, titulo, descricao, link, preco } = props
    
    return(
        <div className='cardCompra'>
            <img src={imagem} alt={titulo}/>
            <a href={link}>
                <h1>{titulo}</h1>
                <p>{descricao}</p>
                <p className='preco'>R$ {preco}</p>
                {props.children}
            </a>
        </div>
    )
}