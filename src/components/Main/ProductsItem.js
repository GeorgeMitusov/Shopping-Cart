import React, { useContext }  from 'react';
import { Context } from '../../context/Context';
import { Link } from "react-router-dom";

import '../../styles/Main/ProductsItem.scss';

const ProductsItem = ({ item, id }) => {

  const { onDetailView } = useContext(Context); 

  return (
    <div className='product-item' onClick={() => onDetailView(item) }>
      <Link to={`/product/${id}`}>
        <img className='product-item-image' src={item.image} alt={item.image} />
        <div className='product-item-descr'>
          <h5 className='product-item-title'> {item.title.slice(0, 45)} </h5>
          <h4 className='product-item-price'> {item.price}$ </h4>
        </div>
      </Link>
    </div>
  )
}

export default ProductsItem