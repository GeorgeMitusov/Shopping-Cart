import React, { useContext }  from 'react';
import { Context } from '../context/Context';

import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

import { Link } from "react-router-dom";

import '../styles/ProductsItem.scss';

const ProductItem = ({ item, id }) => {

  const { onDetailView } = useContext(Context);

  const text = item.title.length > 20 ? item.title.slice(0, 15) + '...' : item.title;

  return (
    <div className='product-item' onClick={() => onDetailView(item) }>
      <Link to={`/product/${id}`}>
        <img className='product-item-image' src={item.image} alt={item.image} />
        <div className='product-item-descr'>
        <Tooltip title={item.title} position='top' trigger='mouseenter'>
          <h5 className='product-item-title'> { text } </h5>
        </Tooltip>
        <h4 className='product-item-price'> {item.price}$ </h4>
        </div>
      </Link>
    </div>
  )
}

export default ProductItem;