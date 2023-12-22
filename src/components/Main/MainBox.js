import React from "react";
import { Link as ScrollLink } from "react-scroll";

import "../../styles/Main/MainBox.scss";

const MainBox = () => {

   return (
    <div className='main-box'>

        <div className='main-box-left'>

          <div className='main-box-left-wrap'>

            <h4 className='main-box-left-wrap-title'> NEW COLLECTION </h4>

            <div className='main-box-left-wrap-descr'>

              <h1> Exciting New Arrivals! </h1>

              <p> Discover our latest collection featuring trendy styles, vibrant colors, and comfortable designs. Elevate your wardrobe with our newest arrivals that reflect the latest fashion trends. From casual wear to formal attire, find the perfect outfit for any occasion. </p>

              <ScrollLink
                className="main-box-link"
                to="section1"
                smooth={true}
                duration={2000}
                spy={true}
                offset={-80}
              >
                <button> Explore collection </button>
              </ScrollLink>

            </div>

          </div>

        </div>

        <div className='main-box-right'></div>

    </div>
  )
};

export default MainBox;
