import React from 'react'

export default function Card(props){
    const {imagem, titulo, descricao} = props
    
    return(
        <div>
            <img src={imagem} alt={titulo}/>
            <h1>{titulo}</h1>
            <p>{descricao}</p>
        </div>
    )
}