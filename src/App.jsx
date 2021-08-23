import React from 'react'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./components/home/home";
import Compras from "./components/compras/compras";

export default function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/compras" component={Compras} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}
