import React from 'react';
import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import '../styles/Footer.scss';

const Footer = ({ styles }) => {

  return (
    <motion.div 
      className='footer'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    > 

      <div className='footer-top'>

        <form 
          className='footer-form' 
          onSubmit={e => e.preventDefault()}
        >
          <label className='footer-form-label'> 
            subscribe to get the <br /> 
            latest product updates 
          </label>
          <input 
            className='footer-form-input' 
            placeholder='Enter your email' 
            type='email' 
            required
          />
          <button className='footer-form-button'> 
            Subscribe 
          </button>
        </form>

        <ul className='footer-nav'>
          <li className='footer-nav-link'> About </li>
          <li className='footer-nav-link'> Shipping </li>
          <li className='footer-nav-link'> About </li>
          <li className='footer-nav-link'> Shipping </li>
        </ul>

      </div>

      <div className='footer-bottom'>

        <ul className='footer-social'>

          <li className='footer-social-link'>
            <FontAwesomeIcon className='footer-social-link-icon' icon={faFacebookF} />
          </li>

          <li className='footer-social-link'>
            <FontAwesomeIcon className='footer-social-link-icon' icon={faLinkedinIn} />
          </li>

          <li className='footer-social-link'>
            <FontAwesomeIcon className='footer-social-link-icon' icon={faGithub} />
          </li>

          <li className='footer-social-link'>
            <FontAwesomeIcon className='footer-social-link-icon' icon={faTelegram} />
          </li>

          <li className='footer-social-link'>
            <FontAwesomeIcon className='footer-social-link-icon' icon={faWhatsapp} />
          </li>

        </ul>

        <div className='footer-bottom-descr'>
          <p> 
            © Copyright 2023 
            Site Remade by
            <a href="/#"> George </a>
          </p>
        </div>

      </div>

    </motion.div>
  )
}

export default Footer