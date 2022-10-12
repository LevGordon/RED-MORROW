import React from "react";
import { Link } from "react-router-dom";
import MerchItemCard from "./MerchItemCard";
import MerchCardInfo from "./MerchItemInfo";

function Merch() {
  const { ciconiaBlack, happyLifeWhite, instigatorPurple } = MerchCardInfo;

  const desktopMerchShop = (
    <div className="merch-item-container">
      <div className="merch-triple-stack">
        <MerchItemCard
          name={ciconiaBlack.name}
          image={ciconiaBlack.image}
          color={ciconiaBlack.color}
          song={ciconiaBlack.song}
          sizes={ciconiaBlack.sizes}
          price={ciconiaBlack.price}
        />
        <MerchItemCard
          name={happyLifeWhite.name}
          image={happyLifeWhite.image}
          color={happyLifeWhite.color}
          song={happyLifeWhite.song}
          sizes={happyLifeWhite.sizes}
          price={happyLifeWhite.price}
        />
        <MerchItemCard
          name={instigatorPurple.name}
          image={instigatorPurple.image}
          color={instigatorPurple.color}
          song={instigatorPurple.song}
          sizes={instigatorPurple.sizes}
          price={instigatorPurple.price}
        />
      </div>
      <div className="merch-triple-stack"></div>
    </div>
  );

  // const mobileMerchShop = (

  // )

  return (
    <div className="merch-main-container">
      <div className="merch-apology-wrap">
        <h1>We are sorry...</h1>
        <h3>
          Red Morrow consists of 3 individuals, without a label or management
          company backing us fincancially.
        </h3>
        <h3>
          Currently - we do not have a feasible method of selling and delivering
          worldwide.
        </h3>
        <h3>
          All of the listed products can be purchased at ONE OF OUR
          <Link to="/"> SHOWS </Link>.
        </h3>
        <h3>
          We ALSO offer deliveries around the LA and SD counties, in California.
          Contact us <Link to="/contact"> HERE </Link> to purchase.
        </h3>
      </div>
      <div>{desktopMerchShop}</div>
    </div>
  );
}

export default Merch;
