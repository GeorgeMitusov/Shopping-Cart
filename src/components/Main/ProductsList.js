import React, { useContext } from 'react';
import { Context } from '../../context/Context';

import ProductsItem from './ProductsItem';
import LoaderSmall from '../LoaderSmall';

import '../../styles/Main/ProductsList.scss';

const ProductsList = () => {

    const { products, loading } = useContext(Context);
    
    const product = products.map( ( i, id ) => (
        <ProductsItem key={id} item={i} id={id} />
    ))

    const link = loading ? <LoaderSmall /> : product;

    return (
        <div className='products-list'>
            <h1> All items </h1>

            <ul className='products-list-box'>
                { link }
            </ul>
        </div>
    )
}

export default ProductsList