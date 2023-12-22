import React, { useContext } from "react";
import { Context } from "../context/Context.js";

import { Link } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { closeOutline, trashOutline } from "ionicons/icons";

import { motion, AnimatePresence } from "framer-motion";

import "../styles/Cart.scss";

const Cart = () => {
  const {
    onCartClose,
    cart,
    onCartItemDelete,
    totalCartPrice,
    removeFromCart,
    addToCart,
  } = useContext(Context);

  const cartVars = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: {
        duration: 1,
        type: "tween",
      },
    },
    exit: { opacity: 0 },
  };

  const cartItemVars = {
    initial: { scale: 0, opacity: 0 },
    enter: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        type: "tween",
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 1,
        type: "tween",
      },
    },
  };

  const emptyTitleVars = {
    initial: { scale: 0, opacity: 0 },
    enter: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.5,
        type: "tween",
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
        type: "tween",
      },
    },
  };

  const cartItem = cart.map((i, id) => (
    <motion.li
      key={id}
      className="cart-menu-list-item"
      variants={cartItemVars}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className="cart-menu-list-item-left">
        <img src={i.image} alt="#" />
      </div>

      <div className="cart-menu-list-item-right">
        <div className="cart-menu-list-item-top">
          <h1> {i.title.slice(0, 27)} </h1>
          <h4> ${i.price.toFixed(0)} </h4>
        </div>

        <div className="cart-menu-list-item-btm">
          <button onClick={() => onCartItemDelete(i)}>
            <IonIcon icon={trashOutline} className="btn-icon" />
          </button>
          <div className="custom-input-container">
            <button
              className="custom-input-button"
              onClick={() => removeFromCart(i)}
            >
              -
            </button>
            <input
              className="custom-input-field"
              type="number"
              min="1"
              max="10"
              value={i.qty}
            />
            <button
              className="custom-input-button"
              onClick={() => addToCart(i)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </motion.li>
  ));

  const cartItemDisplay = (
    <AnimatePresence>
      {cart.length === 0 ? (
        <motion.h1
          className="cart-empty-title"
          variants={emptyTitleVars}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          Your cart is empty now.
        </motion.h1>
      ) : (
        cartItem
      )}
    </AnimatePresence>
  );

  return (
    <motion.section
      className="cart"
      variants={cartVars}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className="cart-wrap">
        <div className="cart-overlay" onClick={onCartClose}></div>

        <div className="cart-menu">
          <div className="cart-menu-top">
            <h1> Your Cart </h1>

            <IonIcon
              icon={closeOutline}
              className="cart-menu-close"
              onClick={onCartClose}
            />
          </div>

          <div className="cart-menu-mid">
            <ul className="cart-menu-list-items">{cartItemDisplay}</ul>
          </div>

          <div className="cart-menu-btm">
            <div className="cart-menu-above">
              <h1> Subtotal </h1>
              <h4> $ {totalCartPrice().toFixed(0)} </h4>
            </div>

            <div className="cart-menu-under">
              <button className="cart-go-to-check-btn">
                <Link
                  className="menu-item"
                  to="/checkout"
                  onClick={onCartClose}
                >
                  Continue to Checkout
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Cart;

// import React, { useContext } from 'react';
// import { Context } from '../context/Context.js';
// import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

// import { motion } from "framer-motion";

// import { AnimatePresence } from 'framer-motion';

// import { bubble as Menu } from 'react-burger-menu';

// import CartBurgerIcon from './CartBurgerIcon.js';

// import '../styles/Cart.scss';

// const Cart = () => {

//   return (
//     <Menu
//       id="cart"
//       right
//       customBurgerIcon={<CartBurgerIcon />}
//       className={ 'cart' }
//       burgerButtonClassName={ "cart-burger-btn" }
//       burgerBarClassName={ "cart-burger-bar" }
//       crossButtonClassName={ "cart-cross-btn" }
//       crossClassName={ "cart-cross" }
//       menuClassName={ "cart-menu" }
//       morphShapeClassName={ "cart-morph" }
//       itemListClassName={ "cart-item-list" }
//       overlayClassName={ "cart-overlay" }
//     >

//       <h1> Your cart </h1>

//       <li> first </li>

//       <li> second </li>

//       <li> third </li>

//     </Menu>
//   )
// }

// export default Cart;
