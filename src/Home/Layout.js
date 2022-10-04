import React from 'react'
import Footer from "./Footer";
import NavBar from "./NavBar";
import Routes from "./Routing";

function Layout() {
  return (
    <div className='container'>
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <Routes />
            </div>
            <div>
                <Footer />
            </div>
            
        </div>

    </div>
  )
}

export default Layout