import React from 'react';
import ItemCount from '../../components/ItemCount'; 
import "./style.css";

export const ItemListContainer = ({greeting}) => {

    const agregarAlCarrito = (cantidad) => {
        console.log(cantidad);
        console.log(`Se agregó la cantidad ${cantidad} al carrito!`);
    }
    

    return (
        <div className='item-list-container'>
            <h1>{greeting}</h1>
            <ItemCount initial={1} stock={7} onAdd={agregarAlCarrito}/>
        </div>
    )
    }

export default ItemListContainer;