import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context.js';
import { Link } from "react-router-dom";

import { AnimatePresence } from 'framer-motion';

import Cart from './Cart.js';
import CartIcon from './CartIcon.js';
import SideMenu from './SideMenu.js';

import Logo from '../assets/logoDarker.png';

import '../styles/Header.scss';

const Header = () => {

  const { cartItemsTotal, cart, onCartMenuOpen, isScrolled, setIsScrolled } = useContext(Context); 
  
  useEffect(() => {
    function handleScroll() {
      const currentPosition = window.pageYOffset;
      setIsScrolled(currentPosition > 50);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClassName = isScrolled ? "header down" : "header";

  return (
    <section className={headerClassName}>
      
      <nav className="navbar">

        <Link to='/' className="header-logo-link">
          <img src={Logo} className="header-logo" alt="header-logo" />
        </Link>

        <div className='header-nav'>

            <CartIcon />
            
            <AnimatePresence>
              { onCartMenuOpen && <Cart /> } 
            </AnimatePresence>

            <SideMenu />

        </div>

      </nav>

    </section>
  )
}

export default Header;