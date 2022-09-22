import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount";
import { useNavigate } from "react-router-dom";
import './style.css';
import { Shop } from "../../context/ShopProvider";

const ItemDetail = ({ product }) => {

    const [qty, setQty] = useState(0);
    const navigate = useNavigate();

    const {addItem} = useContext(Shop);

    const addCart = (quantity) => {
        setQty(quantity);
    };

    const handleFinish = () => {
        const productToSave = {...product, quantity: qty}
        addItem(productToSave)
        navigate("/cart");
    };

    console.log(qty);

    return (
        <div>
            <h1>{product.title}</h1>
                <div className='detallegrid'>
                <img className='imgdetail' src={product.image} width={300} alt="product-detail"/>
                <div className='productodetallado'>
                    <p>{product.description}</p>
                    <h2>{product.price}</h2>
                    {qty ? (
                    <button className="botonfinalizacion" onClick={handleFinish}>Finalizar compra</button>
                ) : (
                    <ItemCount stock={10} initial={1} onAdd={addCart} />
                )}
            </div>
                    </div>
            </div>
    )
};

export default ItemDetail;
