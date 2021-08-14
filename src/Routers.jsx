import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from './components/home/home'
import Compras from './components/compras/compras'

export default function Routers (props) {
    return(  
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/compras' component={Compras}/>
                <Redirect from='*' to='/' />
            </Switch>
        </BrowserRouter> 
    )
}

