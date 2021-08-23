import React from "react";
import "./card.css";

export default function Card(props) {
  const { imagem, titulo, descricao, link } = props;

  return (
    <div className="card">
      <img src={imagem} alt={titulo} />
      <a href={link}>
        <h1>{titulo}</h1>
        <p>{descricao}</p>
        {props.children}
      </a>
    </div>
  );
}
