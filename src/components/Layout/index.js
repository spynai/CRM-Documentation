import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from '../../styles/global-styles';
import Header from "../Header"
import Footer from "../Footer";

const Layout = props => {

  const browser = typeof window !== "undefined" && window;

  const pathname = browser && window.location.pathname;

  return (
    <>
      <GlobalStyle />
      {
        browser && !(pathname.toString())?.includes("delete") && <Header />
      }
      <main>
        <div className="fixedCircle" />
        <div className="fixedCircleBlue" />
        {props.children}
      </main>
      {
        browser && !(pathname.toString())?.includes("delete") && <Footer />
      }
      <div className="fixedCircleBottom" />
      <div className="fixedCircleBlueBottom" />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
