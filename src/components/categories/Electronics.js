import { motion } from 'framer-motion';
import React from 'react';

import '../../styles/Electronics.scss';

const Electronics = () => {

  return (
    <motion.div 
      className='electronics'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    > 
      Electronics
    </motion.div>
  )
}

export default Electronics;