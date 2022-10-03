import React from 'react'
import {Switch, Route} from 'react'
import Home from './Home/Home'
import PhotoGallery from './Pages/PhotoGallery'
import VideoGallery from './Pages/VideoGallery'
import NotFound from './NotFound'
import Music from './Pages/Music'
import Merch from './Pages/Merch'
import Contact from './Pages/Contact'
import AboutUs from './Pages/AboutUs'
import Art from './Pages/Art'

function Routes() {
  return (
    <Switch>

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/photo-gallery">
        <PhotoGallery  />
      </Route>

      <Route exact path="/video-gallery">
        <VideoGallery   />
      </Route>

      <Route path="/music">
        <Music />
      </Route>

      <Route path="/merch">
        <Merch />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/about">
        <AboutUs />
      </Route>

      <Route path="/art">
        <Art />
      </Route>

      <Route path="/instigator-of-unexpected-change">

      </Route>

      <Route path="/instigator-of-unexpected-change/:song_name">

      </Route>

      <Route>
        <NotFound />
      </Route>

    </Switch>
  )
}

export default Routes