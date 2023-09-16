import React from 'react'

import Header from "./components/Header.jsx";
import Routers from "./router/Routers";
import Footer from "./components/Footer/Footer.jsx";

const Layout = () => {
  return (
    <>
      <Header />
      <Routers/>
      <Footer/>
    </>
  )
}

export default Layout