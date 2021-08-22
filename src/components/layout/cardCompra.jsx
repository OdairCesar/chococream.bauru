import React from 'react'
import './cardCompra.css'

export default function CardCompra(props){
    const { imagem, titulo, descricao, preco, tipo, sabor } = props
    
    return(
        <div className='cardCompra'>
            <img src={imagem} alt={titulo}/>
            <a href={`https://api.whatsapp.com/send?phone=5514991997620&text=Ola%20gostaria%20de%20pedir%20um%20${tipo}%20de%20${sabor}`}>
                <h1>{titulo}</h1>
                <p>{descricao}</p>
                <p className='preco'>R$ {preco}</p>
                {props.children}
            </a>
        </div>
    )
}