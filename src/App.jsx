import React from 'react'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import Routers from './Routers';

export default function App() {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
    </>
  );
}
