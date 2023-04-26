import React, { useContext } from 'react';
import { Context } from '../../../context/Context';

import { motion } from 'framer-motion';

import ProductsList from '../../ProductsList';

import '../../../styles/categories/Electronics/Electronics.scss';

const Electronics = () => {

  const { electronicProducts } = useContext(Context);

  return (
    <motion.div 
      className='electronics'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    > 

      <ProductsList productData={electronicProducts} title='Electronics' />

    </motion.div>
  )
}

export default Electronics;