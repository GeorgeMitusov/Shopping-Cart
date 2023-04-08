import React from 'react';
import { motion } from 'framer-motion';

import '../../styles/WomenClothing.scss';

const WomenClothing = () => {

  return (
    <motion.div 
      className='womenClothing'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    > 
      WomenClothing
    </motion.div>
  )
}

export default WomenClothing;