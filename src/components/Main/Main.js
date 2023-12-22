import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/Context';

import { motion } from 'framer-motion';

import MainBox from './MainBox';
import Footer from '../Footer';
import ProductsList from '../ProductsList';

import '../../styles/Main/Main.scss';

const Main = () => {

  const { allProducts, loading, setIsLoadMore, isLoadMore } = useContext(Context);

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

      <ProductsList productData={allProducts} title="All products" />

      { !isLoadMore && (
        <button 
          className='products-list-load-more-btn'
          onClick={() => setIsLoadMore(true)}
        > 
          { loading ? 'Loading...' : 'Load more...' } 
        </button>
      )}

      <Footer />

    </motion.div>
  )
}

export default Main;