import React from 'react'

function PhotoGallery() {

  const events = [
    {
      name: '',
      date: '',
    },
    {
      name: '',
      date: '',

    },
    {
      name: '',
      date: '',

    },
    {
      name: '',
      date: '',

    }
  ];




  return (
    <div className="photo-gallery-container">
      <div className='photo-gallery-top-half'>
        <h3>PhotoGallery</h3>
        <button className='photo-gallery-random-browse-button'>Browse at Random!</button>
      </div>
      <div className='photo-gallery-bottom-half'>
        
        </div>
       
    </div>
  )
}

export default PhotoGallery