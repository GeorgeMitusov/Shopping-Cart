import React, { useEffect, useContext } from 'react';
import { Context } from '../../context/Context';
import { AnimatePresence } from 'framer-motion';

import OrderSuccess from './OrderSuccess.js';
import CheckoutBox from './CheckoutBox.js';

import '../../styles/Checkout/Checkout.scss';

const Checkout = () => {

  const { orderSuccess } = useContext(Context); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='checkout'>

      <AnimatePresence>
        { orderSuccess ? <OrderSuccess /> : <CheckoutBox/> }
      </AnimatePresence>
        
    </div>
  )
}

export default Checkout;