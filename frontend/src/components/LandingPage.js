import React from 'react'
import Navbar from "./Navbar";
import Home from "./Home";
import Timeline from "./Timeline";
import Team from "./team";
import Quote from "./quote";
import Footer from "./footer";

function LandingPage() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Timeline/>
        <Team/>
        <Quote/>
        <Footer/>

    </div>
  )
}

export default LandingPage