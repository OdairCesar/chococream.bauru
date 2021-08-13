import React from 'react'
import './App.css';
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import Routers from './Routers';

export default function App() {
  return (
    <div className='pagina'>
      <Header />
      <Routers />
      <Footer />
    </div>
  );
}
