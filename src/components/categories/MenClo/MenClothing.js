import React, { useContext } from 'react';
import { Context } from '../../../context/Context';

import { motion } from 'framer-motion';

import ProductsList from '../../ProductsList';

import '../../../styles/categories/MenClo/MenClothing.scss';

const MenClothing = () => {

  const { menProducts } = useContext(Context);

  return (
    <motion.div 
      className='menClothing'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    > 

      <ProductsList productData={menProducts} title='Men Clothing' />

    </motion.div>
  )
}

export default MenClothing;
