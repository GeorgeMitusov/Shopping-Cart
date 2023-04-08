import React, { useContext } from 'react';
import { Context } from '../context/Context.js';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { motion } from "framer-motion";

import { AnimatePresence } from 'framer-motion';

import { elastic as Menu } from 'react-burger-menu';

import '../styles/SideMenu.scss';

const SideMenu = () => {

    const { headerLinksData, onInsideMenuOpen, setOnInsideMenuOpen, 
        onMenuToggle, onNavMenuOpen, onNavMenuClose } = useContext(Context);
    
    const linksVariants = {
        initial: { 
            opacity: 0,
            scale: 0, 
            transition: { duration: .5 } 
        },
        enter: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: .5 } 
        },
        exit: { 
            opacity: 0,
            scale: 0, 
            transition: { duration: .5 } 
        }
    };

    const categoriesLinksRender = headerLinksData.map( ( i, id ) => (
        <li 
            key={id} 
            className='header-categories-item' 
            onClick={onNavMenuClose}
        >
            <Link 
                to={`/categories/${i.link}`}
                className='header-categories-item-link'
            > 
                { i.title } 
            </Link>
        </li>
    ));

    const categoriesItem = (
        <Link 
            id="categories" 
            className="menu-item" 
            to="/categories/electronics"
            onClick={onNavMenuClose}
            onMouseEnter={() => setOnInsideMenuOpen(true)}
            onMouseLeave={() => setOnInsideMenuOpen(false)}
        > 
            Categories
            <FontAwesomeIcon 
                className='header-categories-icon-down' 
                icon={faChevronDown} 
            /> 
        </Link>
    )

    const toggleLinks = (
        <AnimatePresence>

            { onInsideMenuOpen && ( 
                <motion.ul 
                    className='header-categories-list'
                    variants={linksVariants}
                    initial="initial"
                    animate='enter'
                    exit='exit'
                    onMouseEnter={() => setOnInsideMenuOpen(true)}
                    onMouseLeave={() => setOnInsideMenuOpen(false)}
                > 
                    { categoriesLinksRender } 
                </motion.ul> 
            )}

        </AnimatePresence>
    )

    return (
        <Menu 
            right
            className={ 'side-menu' }
            overlayClassName="side-menu-overlay"
            isOpen={onNavMenuOpen}
        >
            
            <Link className="menu-item" to="/" onClick={onNavMenuClose}> 
                Shop all 
            </Link>

            { categoriesItem }

            { toggleLinks }

            <Link className="menu-item" to="/about" onClick={onNavMenuClose}>
                About 
            </Link>

        </Menu>
    );
}

export default SideMenu;