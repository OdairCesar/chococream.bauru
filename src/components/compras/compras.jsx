import React, { useMemo, useState } from "react";
import CardCompra from "../layout/cardCompra";
import "./compras.css";
import produtos from "../../data/produtos";

import imagens from "./imagens"; //Primeira cambiarra até achar uma forma de passar as url das imagens sem precisar importa-las

export default function Compras(props) {
  const [busca, setBusca] = useState("");

  const produtosFiltrados = useMemo(() => {
    const lowerBusca = busca.toLowerCase();
    return produtos.filter((produto) =>
      produto.nome.toLowerCase().startsWith(lowerBusca)
    );
  }, [busca]);

  return (
    <main className="compras">
      <div className="filtros-ordem">
        <label>
          Busca:
          <input
            type="text"
            value={busca}
            onChange={(evento) => setBusca(evento.target.value)}
          />
        </label>
        <select name="" id="">
          <option value="">Maior valor</option>
          <option value="">Menor valor</option>
        </select>
      </div>
      <div className="vitrine">
        <div id="produtos" className="produtos">
          {produtosFiltrados.map((pr) => (
            <CardCompra
              key={pr.id}
              link={pr.link}
              imagem={imagens[pr.imagem]} //imagens é uma constante com todas as imagens que usaremos nos card. Então a imagem fica salva no arquivo imagens.js e o numero do elemento fica salva nos dados do produto
              titulo={pr.nome}
              descricao={pr.descricao}
              preco={pr.preco}
              tipo={pr.tipo}
              sabor={pr.sabor}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
