import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { createBrowserHistory } from 'history';

import Header from './Header';
import Main from './Main/Main';
import About from './About';
import Cart from './Cart';
import Electronics from './categories/Electronics';
import Jewelry from './categories/Jewelry';
import MenClothing from './categories/MenClothing';
import WomenClothing from './categories/WomenClothing';
import DetailedView from './DetailedView';
import ScrollToTopBtn from './ScrollToTopBtn';
import Checkout from './Checkout/Checkout';
import CheckoutForm from './Checkout/CheckoutForm';

const AnimatedRoutes = ({ error }) => {

    const location = useLocation();

    const history = createBrowserHistory();

    return (
        <>
            <Header />

            <ScrollToTopBtn />

            <AnimatePresence exitBeforeEnter>

                <Routes key={location.pathname} location={location} history={history}>

                    <Route path="/" element={ <Main /> } />

                    <Route path="/categories/electronics" element={ <Electronics /> } />

                    <Route path="/categories/jewelry" element={ <Jewelry /> } />

                    <Route path="/categories/men-clothing" element={ <MenClothing /> } />

                    <Route path="/categories/women-clothing" element={ <WomenClothing /> } />

                    <Route path="/about" element={ <About /> } />

                    <Route path="/checkout" element={ <Checkout /> } />

                    {/* <Route path="/contact-form" element={ <CheckoutForm /> } /> */}

                    <Route path="/product/:id" 
                        element={ <DetailedView /> } />

                </Routes>

            </AnimatePresence>
        </>
    )
}

export default AnimatedRoutes;