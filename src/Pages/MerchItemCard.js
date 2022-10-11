import React from 'react'

function MerchItemCard({name, image, song, sizes, price}) {
  return (
    <div className='merch-item-card'>
      <h2 className='merch-item-title'>{name}</h2>
      <img src="https://i.etsystatic.com/15943842/r/il/c7985d/1559269393/il_794xN.1559269393_a97f.jpg" alt="" className='merch-item-img'/>
      <p className='merch-item-p'>song/album: {song}</p>
      <p className='merch-item-p'>sizes: {sizes}</p>
      <h2 className='merch-item-price'>PRICE: {price}</h2>
    </div>
  )
}

export default MerchItemCard