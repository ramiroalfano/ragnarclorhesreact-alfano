import React from 'react';
import './style.css';

const Item = ({product}) => {
    return (
    <div className='card' >
        <img src={product.image} class="rounded" width={150} alt="product"/>
        <p>{product.title}</p>
    </div>
    )
}

export default Item