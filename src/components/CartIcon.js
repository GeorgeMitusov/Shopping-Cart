import React, { useContext } from "react";
import { Context } from "../context/Context.js";

import { motion, AnimatePresence } from "framer-motion";

import "../styles/CartIcon.scss";

const CartIcon = () => {
  const { onCartToggle, cartLength } = useContext(Context);

  const pVar = {
    initial: { scale: 0, opacity: 0 },
    enter: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        type: "tween",
      },
    },
    exit: { scale: 0, opacity: 0 },
  };

  return (
    <div className="cartIcon" onClick={onCartToggle}>
      Cart
      <div className="cart-total">
        <AnimatePresence>
          <motion.p
            variants={pVar}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            {cartLength()}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CartIcon;
