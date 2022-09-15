import React from 'react';
import ItemCount from '../ItemCount';
import './style.css';

const ItemDetail = ({product}) => {
return (
    <div>
        <h1>{product.title}</h1>
            <div className='detallegrid'>
            <img className='imgdetail' src={product.image} width={300} alt="product-detail"/>
            <div className='productodetallado'>
                <p>{product.description}</p>
                <h2>{product.price}</h2>
                <ItemCount/>
                </div>
        </div>
    </div>
)
}

export default ItemDetail