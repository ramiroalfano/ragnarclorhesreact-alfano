import React from 'react';
import './style.css';
import {useNavigate} from 'react-router-dom';

const Item = ({product}) => {
const navigate = useNavigate();

const handleNavigate = () => {
    navigate(`/detail/${product.id}`)
}

return (
    <div className='card-container' onClick={handleNavigate}>
    <img className="card-img" src={product.image} width={100} alt="product"/>
    <h1 className='card-title'>{product.title}</h1>
    <p className='card-price'>${product.price}</p>
    <button type="button" class="btn btn-outline-success">ver mas...</button>
    </div>
    
)
}

export default Item