import React, {useState} from "react";
import './style.css';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css"

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if(count < stock) {
            setCount(count+1);
        } else {
            Toastify({
                text: "No hay stock disponible",
                duration: 3000
                }).showToast();
        }
    }

    const handleDecrement = () => {
        if(count < stock) {
            setCount(count-1);
}
}
    const addCart = () => {
        onAdd(count);
        setCount(initial=1);
    }


    return (
    <div className="contador">
        <button className="cuentamenos" onClick={handleDecrement}>-</button>
        <h2 className="stock">{count}</h2>
        <button className="cuentamas" onClick={handleAdd}>+</button>
        <button className="carro" onClick={addCart}>Agregar al cart</button>
    </div>
    );
};

export default ItemCount;