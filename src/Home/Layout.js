import React from 'react'
import Footer from "./Footer";
import NavBar from "./NavBar";
import Routing from "./Routing";

function Layout() {
  return (
    <div className='container'>
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <Routing />
            </main>
            <footer>
                <Footer />
            </footer>
            
        </div>
    </div>
  )
}

export default Layout