import React from 'react'

import Header from "../Header/Header.jsx";
import Routers from "../../router/Routers.js";
import Footer from "../Footer/Footer.jsx";

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