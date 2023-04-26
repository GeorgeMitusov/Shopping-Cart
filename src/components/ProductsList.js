import React, { useContext } from 'react';
import { Context } from '../context/Context';

import LoaderSmall from './LoaderSmall';
import UniItem from './ProductItem';

import '../styles/ProductsList.scss';

const ProductsList = ({ productData, title }) => {

    const { loading } = useContext(Context);
    
    const product = productData.map( ( i, id ) => (
        <UniItem key={id} item={i} id={id} />
    ))

    const link = loading ? <LoaderSmall /> : product;

    return (
        <div className='products-list'>
            <h1> { title } </h1>

            <ul className='products-list-box'>
                { link }
            </ul>

        </div>
    )
}

export default ProductsList;