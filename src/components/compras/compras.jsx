import React from 'react'
import CardCompra from '../layout/cardCompra'
import trufa from '../../assets/imgs/produtos/trufas/trufa-de-maracuja.jpg'
import './compras.css'

export default function Compras(props){
    return(
        <main className='compras'>
            <div className='filtros-ordem'>
                <form> 
                    <select name="" id="">
                        <option value="">Ordem crescende</option>
                        <option value="">Ordem decrescende</option>
                        <option value="">Maior valor</option>
                        <option value="">Menor valor</option>
                    </select>
                </form>
            </div>
            <div className='vitrine'>
                <div className='filtro-tipo'>
                    <p>Tipos</p>
                    <ul>
                        <a href='./'>
                            <li className='cone'>Cones</li>
                        </a>

                        <a href='./'>
                            <li className='bolo'>Bolo</li>
                        </a>
                        
                        <a href='./'>
                            <li className='trufa'>Trufa</li>
                        </a>
                        <a href='./'>
                            <li className='mousses'>Mousse</li>
                        </a>
                    </ul>
                </div>
                <div className='produtos'>
                    <CardCompra
                        link='./' 
                        imagem={trufa} 
                        titulo='Trunfa' 
                        descricao='Serei o que quiser. Mas tenho que querer o que for.'
                        preco='4,00'/>
                    <CardCompra
                        link='./' 
                        imagem={trufa} 
                        titulo='Trunfa' 
                        descricao='Serei o que quiser. Mas tenho que querer o que for.'/>
                    <CardCompra
                        link='./' 
                        imagem={trufa} 
                        titulo='Trunfa' 
                        descricao='Serei o que quiser. Mas tenho que querer o que for.'/>
                    <CardCompra
                        link='./' 
                        imagem={trufa} 
                        titulo='Trunfa' 
                        descricao='Serei o que quiser. Mas tenho que querer o que for.'/>
                    <CardCompra
                        link='./' 
                        imagem={trufa} 
                        titulo='Trunfa' 
                        descricao='Serei o que quiser. Mas tenho que querer o que for.'/>
                    
                </div>
            </div>
        </main>
    )
}