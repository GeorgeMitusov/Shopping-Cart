import React, { useEffect }  from 'react';
import { motion } from 'framer-motion';

import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

import CheckoutForm from './CheckoutForm.js';
import Order from './Order.js';
import Footer from '../Footer';

import '../../styles/Checkout/Checkout.scss';

const Checkout = () => {

  const navigate = useNavigate(); 

  const handleGoBack = () => navigate(-1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='checkout'>

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
      
      <div className='checkout-box'>

        <CheckoutForm />

        <Order />
        
      </div>

      {/* <Footer /> */}
        
    </div>
  )
}

export default Checkout;





























// import React, { useContext, useEffect }  from 'react';
// import { Context } from '../context/Context.js';
// import { motion } from 'framer-motion';

// import { Parallax, ParallaxLayer } from '@react-spring/parallax'

// import { useNavigate } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

// import CheckoutForm from './CheckoutForm.js';
// // import ContactForm from './Checkout/ContactForm.js';
// import Footer from './Footer';

// import '../styles/Checkout.scss';

// const Checkout = () => {

//   const { cart, totalCartPrice } = useContext(Context);

//   const navigate = useNavigate(); 

//   const handleGoBack = () => navigate(-1);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const cartItemVars = {
//     initial: {  scale: 0, opacity: 0 },
//     enter: {
//       scale: 1, 
//       opacity: 1,
//       transition: {
//         duration: 1,
//         type: 'tween'
//       }
//     },
//     exit: { 
//       scale: 0, 
//       opacity: 0,
//       transition: {
//         duration: 1,
//         type: 'tween'
//       }
//     }
//   };

//   const cartItem = cart.map( ( i, id ) => (
//     <motion.li 
//       key={id} 
//       className="checkout-menu-list-item"
//       variants={cartItemVars}
//       initial="initial"
//       animate='enter'
//       exit='exit'
//     >

//       <div className='checkout-menu-list-item-left'>
//         <img src={i.image} alt="#" />
//       </div>

//       <div className='checkout-menu-list-item-right'>

//         <div className='checkout-menu-list-item-top'>
//           <h1> { i.title.slice(0, 27) } </h1>
//           <h4> ${ i.price.toFixed(0) } </h4>
//         </div>

//         <div className='checkout-menu-list-item-btm'>
//           <span> Quantity: { i.qty } </span>
//         </div>

//       </div>

//     </motion.li>
//   ))

//   return (
//     <div className='checkout'>
//       {/* <div className='background' /> */}

//       <motion.button 
//         onClick={handleGoBack}
//         className='checkout-go-back-btn'
//         initial={{ x: '-150%' }}
//         animate={{ 
//             x: '0%',
//             transition: {
//                 delay: 1,
//                 type: 'spring'
//             }
//         }}
//         exit={{ x: '-100%' }}
//         transition={{ duration: 0.5 }}
//       >
//         <FontAwesomeIcon 
//           className='checkout-go-back-btn-icon' 
//           icon={faArrowLeftLong} 
//         /> 
//       </motion.button>

//       <Parallax pages={4} className="parallax-container">

//         <ParallaxLayer
//           sticky={{ start: 0, end: 2.5 }} 
//           // offset={0.4} 
//           // speed={0.5} 
//           className="contact-form-parallax-box"
//         >
//           <CheckoutForm />
//         </ParallaxLayer>

//         <ParallaxLayer 
//           sticky={{ start: 0, end: .5 }} 
//           className="parallax-card-sticky"
//         >
//           <div className='order-summary'>
//             <h1 className='order-summary-title'> Order Summary </h1>

//             <ul className='checkout-menu-list-items'>
//               { cartItem }
//             </ul>

//             <div className='order-summary-btm'>

//               <div className='order-summary-subtotal'>
//                 <span> Subtotal </span>
//                 <span> ${ totalCartPrice().toFixed(0) } </span>
//               </div>

//               <div className='order-summary-total'>
//                 <h2> Total </h2>
//                 <h3> ${ totalCartPrice().toFixed(0) } USD </h3>
//               </div>

//               <div className='order-summary-submit'>
//                 <button className='order-summary-submit-btn'> Place Order </button>
//               </div>
              
//             </div>

//           </div>
//         </ParallaxLayer>

//         <ParallaxLayer 
//           offset={1.45} 
//           speed={0.5} 
//         >
//           <Footer />
//         </ParallaxLayer>
        
//       </Parallax>
//     </div>
//   )
// }

// export default Checkout;