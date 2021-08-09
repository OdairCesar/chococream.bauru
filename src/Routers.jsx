import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from './components/home/home'

export default function Routers (props) {
    return(  
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/produtos' component={Home}/>
                <Route path='/delivery' component={Home}/>
                <Route path='/contato' component={Home}/>
                <Redirect from='*' to='/' />
            </Switch>
        </BrowserRouter> 
    )
}

