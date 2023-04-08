import React, { useContext }  from 'react';
import { Context } from '../../context/Context.js';
import { motion } from 'framer-motion';

import '../../styles/Checkout/Order.scss';

const Order = () => {

    const { cart, totalCartPrice } = useContext(Context);

    const cartItemVars = {
        initial: {  scale: 0, opacity: 0 },
        enter: {
          scale: 1, 
          opacity: 1,
          transition: {
            duration: 1,
            type: 'tween'
          }
        },
        exit: { 
          scale: 0, 
          opacity: 0,
          transition: {
            duration: 1,
            type: 'tween'
          }
        }
    };

    const cartItem = cart.map( ( i, id ) => (
        <motion.li 
          key={id} 
          className="checkout-menu-list-item"
          variants={cartItemVars}
          initial="initial"
          animate='enter'
          exit='exit'
        >
    
          <div className='checkout-menu-list-item-left'>
            <img src={i.image} alt="#" />
          </div>
    
          <div className='checkout-menu-list-item-right'>
    
            <div className='checkout-menu-list-item-top'>
              <h1> { i.title.slice(0, 27) } </h1>
              <h4> ${ i.price.toFixed(0) } </h4>
            </div>
    
            <div className='checkout-menu-list-item-btm'>
              <span> Quantity: { i.qty } </span>
            </div>
    
          </div>
    
        </motion.li>
    ))

    return (
        <div className='order-summary'>

          <div className='order-summary-box'>

            <h1 className='order-summary-title'> Order Summary </h1>

            <ul className='checkout-menu-list-items'>
                { cartItem }
            </ul>

            <div className='order-summary-btm'>

                <div className='order-summary-subtotal'>
                    <span> Subtotal </span>
                    <span> ${ totalCartPrice().toFixed(0) } </span>
                </div>

                <div className='order-summary-total'>
                    <h2> Total </h2>
                    <h3> ${ totalCartPrice().toFixed(0) } USD </h3>
                </div>

                {/* <div className='order-summary-submit'>
                  <button className='order-summary-submit-btn'> Place Order </button>
                </div> */}
                
            </div>

          </div>

        </div>
    )
}

export default Order