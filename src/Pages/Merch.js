import React from 'react'
import MerchItemCard from './MerchItemCard'
import MerchCardInfo from './MerchItemInfo'

function Merch() {
  const {ciconiaBlack, happyLifeWhite, instigatorPurple} = MerchCardInfo

  const desktopMerchShop = (
    <div className='merch-main-container'>
      <div className='merch-triple-stack'>
        <MerchItemCard name={ciconiaBlack.name} image={ciconiaBlack.image} color={ciconiaBlack.color} song={ciconiaBlack.song} sizes={ciconiaBlack.sizes} price={ciconiaBlack.price} />
        <MerchItemCard name={happyLifeWhite.name} image={happyLifeWhite.image} color={happyLifeWhite.color} song={happyLifeWhite.song} sizes={happyLifeWhite.sizes} price={happyLifeWhite.price} />
        <MerchItemCard name={instigatorPurple.name} image={instigatorPurple.image} color={instigatorPurple.color} song={instigatorPurple.song} sizes={instigatorPurple.sizes} price={instigatorPurple.price} />
      </div>
      <div className='merch-triple-stack'>
      
      </div>
    </div>
  )

  // const mobileMerchShop = (

  // )


  return desktopMerchShop
}

export default Merch