import React, { useEffect, useContext } from 'react';
import { Context } from '../../context/Context';

import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

import CheckoutForm from './CheckoutForm';
import Order from './Order';

import '../../styles/Checkout/CheckoutBox.scss';

const CheckoutWrap = () => {

  const { orderSuccess } = useContext(Context); 

  const navigate = useNavigate(); 

  const handleGoBack = () => navigate(-1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      className='checkout-box'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}    
    >
      <motion.button 
        onClick={handleGoBack}
        className='checkout-go-back-btn'
        initial={{ x: '-150%' }}
        animate={{ 
            x: '0%',
            transition: {
                delay: 1,
                type: 'spring'
            }
        }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.5 }}
      >
        <FontAwesomeIcon 
          className='checkout-go-back-btn-icon' 
          icon={faArrowLeftLong} 
        /> 
      </motion.button>

      <CheckoutForm />

      <Order />
    </motion.div>
  )
}

export default CheckoutWrap
