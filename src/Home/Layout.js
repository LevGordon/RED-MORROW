import React from 'react'
import Footer from "../Footer";
import NavBar from "../NavBar";
import Routes from "../Routing";

function Layout() {
  return (
    <div className='container'>
        <div className='head-main-foot'>
            <header>
                <NavBar />
            </header>
            <main>
                <Routes />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>


    </div>
  )
}

export default Layout