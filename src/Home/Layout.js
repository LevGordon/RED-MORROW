import React from 'react'
import Footer from "./Footer";
import NavBar from "./NavBar";
import Routing from "./Routing";

function Layout() {
  return (
    <div className='container'>
        <div>
            <div>
                <NavBar />
            </div>
            {/* <div>
                <Routing />
            </div> */}
            <div>
                <Footer />
            </div>
            
        </div>
        <h1>LAYOUT</h1>

    </div>
  )
}

export default Layout