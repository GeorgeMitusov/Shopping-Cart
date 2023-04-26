import React, { useContext } from 'react';
import { Context } from '../../context/Context';

import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import '../../styles/Checkout/OrderSuccess.scss';

const OrderSuccess = () => {

  const { fromFinalPageGoBack } = useContext(Context); 

  return (
    <motion.div 
      className='order-success'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >

      <div className='order-success-wrap'>
        <h1> Order Success </h1>
        <AnimatePresence mode='wait'>
          <Link 
            onClick={fromFinalPageGoBack} 
            to="/"
          >
            <button class="button-24"> Get back to shopping </button>
          </Link>
        </AnimatePresence>
      </div>

    </motion.div>
  )
}

export default OrderSuccess
