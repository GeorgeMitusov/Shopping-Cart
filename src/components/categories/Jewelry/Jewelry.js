import React, { useContext } from 'react';
import { Context } from '../../../context/Context';

import { motion } from 'framer-motion';

import ProductsList from '../../ProductsList';

import '../../../styles/categories/Jewelry/Jewelry.scss';

const Jewelry = () => {

  const { jewProducts } = useContext(Context);

  return (
    <motion.div 
      className='jewelry'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    > 
      <ProductsList productData={jewProducts} title='Jewelry' />
    </motion.div>
  )
}

export default Jewelry;