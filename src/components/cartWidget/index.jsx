import React from 'react'
import {HiShoppingCart} from 'react-icons/hi';
import './style.css'

const CartWidget = () => {

return (
    <div  className='cartwidget'>
    <HiShoppingCart color='white' size={30}/>
    </div>
)
}
export default CartWidget;