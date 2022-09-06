import React, {useState, useEffect} from "react";
import './style.css';

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if(count < stock) {
            setCount(count+1);
        } else {
            alert("No hay stock disponible");
        }
    }

    const handleDecrement = () => {
    }

    const addCart = () => {
        onAdd(count);
        setCount(initial);
    }

    useEffect(()=> {
        console.log("ItemCount");
    }, []);

    useEffect(()=> {
        console.log("Se actualizo el stock!")
    }, [count]);

    return (
    <div className="contador">
        <button className="cuenta" onClick={handleDecrement}>-</button>
        <h2>{count}</h2>
        <button className="cuenta" onClick={handleAdd}>+</button>
        <button className="carro" onClick={addCart}>Agregar al carrito</button>
    </div>
    );
};

export default ItemCount;