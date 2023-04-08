import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import MainBox from './MainBox';
import ProductsList from './ProductsList';
import Footer from '../Footer';

import '../../styles/Main/Main.scss';

const Main = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      className='main'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >

      <MainBox />

      <ProductsList />

      <Footer />

    </motion.div>
  )
}

export default Main;