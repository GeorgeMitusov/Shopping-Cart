import React, { useContext } from 'react';
import { Context } from '../../../context/Context';

import { motion } from 'framer-motion';

import ProductsList from '../../ProductsList';

import '../../../styles/categories/WomenClo/WomenClothing.scss';

const WomenClothing = () => {

  const { womenProducts } = useContext(Context);

  return (
    <motion.div 
      className='womenClothing'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    > 

      <ProductsList productData={womenProducts} title='Women Clothing' />

    </motion.div>
  )
}

export default WomenClothing;