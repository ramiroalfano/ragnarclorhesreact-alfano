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
        if(count < stock) {
            setCount(count-1);
}
}
    const addCart = () => {
        onAdd(count);
        setCount(initial=1);
    }

    useEffect(()=> {
        console.log("ItemCount");
    }, []);

    useEffect(()=> {
        console.log("Se actualizo el stock!")
    }, [count]);

    return (
    <div className="contador">
        <button className="cuentamenos" onClick={handleDecrement}>-</button>
        <h2 className="stock">{count}</h2>
        <button className="cuentamas" onClick={handleAdd}>+</button>
        <button className="carro" onClick={addCart}>Agregar al carrito</button>
    </div>
    );
};

export default ItemCount;