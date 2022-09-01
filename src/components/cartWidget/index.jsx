import React from 'react'
import {HiShoppingCart} from 'react-icons/hi';

export const CartWidget = () => {
return (
    <div style={{
        width: '25px',
        display: 'flex',
        right: '20px',
        top: '5px',
    }}>
    <HiShoppingCart color='white' size={50}/>
    </div>
)
}
export default CartWidget;