import React from 'react'
import {Route, Routes} from 'react-router-dom'


import Home from './Home'
import PhotoGallery from '../Pages/PhotoGallery'
import VideoGallery from '../Pages/VideoGallery'
import NotFound from '../NotFound'
import Music from '../Pages/Music'
import Merch from '../Pages/Merch'
import Contact from '../Pages/Contact'
import AboutUs from '../Pages/AboutUs'
import Art from '../Pages/Art'
import Blog from '../Pages/Blog/Blog'

function Routing() {
  return (
    <Routes>

      <Route exact path="/" element={<Home />}/>
      <Route path="/photo-gallery" element={<PhotoGallery />} />
      <Route path="/video-gallery" element={<VideoGallery />} />
      <Route path="/music" element={<Music />} />
      <Route path="/shop" element={<Merch />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/art" element={<Art />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/instigator-of-unexpected-change" element={''} />
      <Route path="/instigator-of-unexpected-change/documentary" element={''} />
      <Route path="/instigator-of-unexpected-change/:song_name" element={''} />

      <Route path='*' element={<NotFound />} />


    </Routes>
  )
}

export default Routing