import React from 'react';
import { motion } from 'framer-motion';

import '../../styles/MenClothing.scss';

const MenClothing = () => {

  return (
    <motion.div 
      className='menClothing'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    > 
      MenClothing
    </motion.div>
  )
}

export default MenClothing;