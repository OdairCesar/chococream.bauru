import React, { useMemo, useState } from "react"
import CardCompra from "../layout/cardCompra"
import "./compras.css"
import produtos from '../../data/produtos'

export default function Compras (props){
  const [busca, setBusca] = useState('')

  const produtosFiltrados = useMemo (() =>{
    const lowerBusca = busca.toLowerCase()
    return produtos.filter((produto) => 
      produto.nome.toLowerCase().startsWith(lowerBusca)
    )
  }, [busca])
  
  return (
    <main className="compras">
      <div className="filtros-ordem">
        <label>
          Busca: 
          <input 
            type='text'
            value={busca}
            onChange={ (evento) => setBusca(evento.target.value) }/>
        </label>
        <select name="" id="">
          <option value="">Maior valor</option>
          <option value="">Menor valor</option>
        </select>
      </div>
      <div className="vitrine">
        <div id='produtos' className="produtos">
          {
            produtosFiltrados.map((pr) => 
              <CardCompra
                key={pr.id}
                link={pr.link}
                imagem={"../../" + pr.imagem}
                titulo={pr.nome}
                descricao={pr.descricao}
                preco={pr.preco}
              />
            )
          }
        </div>
      </div>
    </main>
  )
}
