import React from 'react'

function MerchItemCard({name, image, color, song, sizes, price}) {
  return (
    <div className='merch-item-card'>
      <h3>{name}</h3>
      <img src={image} alt=""/>
      <p>color: {color}</p>
      <p>song/album: {song}</p>
      <p>sizes: {sizes}</p>
      <h4>price: {price}</h4>
    </div>
  )
}

export default MerchItemCard