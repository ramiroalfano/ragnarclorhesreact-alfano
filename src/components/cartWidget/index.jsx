import React from 'react'
import {HiShoppingCart} from 'react-icons/hi';

export const CartWidget = () => {
return (
    <div style={{
        width: '40px'
    }}>
    <HiShoppingCart color='red'/>
    </div>
)
}
export default CartWidget;