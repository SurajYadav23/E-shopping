import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/S/sonata-images-prod/UK_Superhero_Acquisition_FT_April_2021_V2/ec12117a-ee48-453c-9a64-4453031d477a._UR3000,600_.jpeg"
          alt=""
        />
        <div className="home_row">
          <Product
            id={234}
            title="the lean sartup "
            price={19.09}
            image={
              'https://rukminim1.flixcart.com/image/312/312/kkbh8cw0/regionalbooks/q/n/n/the-lean-startup-original-imafzp3tdmyfzvzp.jpeg?q=70'
            }
            rating={3}
          />
          <Product
            id={235}
            title="Cadbury Gems Milk
             Chocolare(7.9g)- pack"
            price={23}
            image={
              'https://images-eu.ssl-images-amazon.com/images/I/611WqJFZa3L._AC_UL160_SR160,160_.jpg'
            }
            rating={4}
          />
          <Product
            id={236}
            title="iphone 14 plus 512GB Gold "
            price={159900}
            image={
              'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71ZDY57yTQL._AC_UY218_.jpg'
            }
            rating={4}
          />
        </div>
        <div className="home_row">

          
        </div>
        <div className="home_row"></div>
      </div>
    </div>
  );
}

export default Home;
