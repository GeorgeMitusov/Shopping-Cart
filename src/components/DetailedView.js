import React, { useContext, useEffect }  from 'react';
import { Context } from '../context/Context.js';
import { motion } from 'framer-motion';

import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

import DetailedViewRight from './DetailedViewRight.js';

import '../styles/DetailedView.scss';

const DetailedView = () => {

    const { selectedItem } = useContext(Context);

    const navigate = useNavigate(); 

    const handleGoBack = () => navigate(-1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div 
            className='detailed-view'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <motion.button 
                onClick={handleGoBack}
                className='detailed-view-go-back-btn'
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
                    className='detailed-view-go-back-btn-icon' 
                    icon={faArrowLeftLong} 
                /> 
            </motion.button>
            
            <div className='detailed-view-left-side'>
                <div className='detailed-view-left-wrap'>
                    <img 
                        className='detailed-view-left-image' 
                        alt="#" 
                        src={selectedItem.image} 
                    />
                </div>
            </div>

            <div className='detailed-view-right-side'>
                <DetailedViewRight />
            </div>
            
        </motion.div>
    )
}

export default DetailedView;
