import React from 'react';
import { motion } from 'framer-motion';

import '../../styles/Jewelry.scss';

const Jewelry = () => {

  return (
    <motion.div 
      className='jewelry'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    > 
      Jewelry
    </motion.div>
  )
}

export default Jewelry;