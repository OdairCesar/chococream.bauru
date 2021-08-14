import React from 'react'

export default function Compras(props){
    return(
        <main>
            <div className='filtros-ordem'>

            </div>
            <div className='vitrine'>
                <div className='filtro-tipo'>
                    <form>
                        <input type='checkbox' name='cone' value='cone'/>
                        <input type='checkbox' name='bolo' value='bolo'/>
                        <input type='checkbox' name='trunfa' value='trunfa'/>
                        <input type='checkbox' name='boloCopo' value='boloCopo'/>
                    </form>
                </div>
                <div className='produtos'>

                </div>
            </div>
        </main>
    )
}