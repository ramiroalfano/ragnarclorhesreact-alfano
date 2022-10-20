import React, {useState } from 'react'
import { createContext } from "react";

export const Shop = createContext()

const ShopProvider = ({ children }) => {

const [cart, setcart] = useState([])

const isInCart = (id) => {
    return cart.some(producto => producto.id === id)
}

const removeItem = (itemId) => {
    const productosFiltrados = cart.filter((producto) => producto.id !== itemId)
    setcart(productosFiltrados)
}

const clearCart = () => {
    setcart([])
}

const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
    const carroMapeado = cart.map((producto) => {
        if (producto.id === item.id) {
        producto.cantidad += quantity
        return producto
        }
        return producto
    })
    setcart(carroMapeado)
    } else {
    const itemPlusQty = { ...item, cantidad: quantity }
    const carroDuplicado = [...cart, itemPlusQty]
    setcart(carroDuplicado)
    }
}

const total = () => {
    return cart.reduce((acc, elem) => acc += (elem.cantidad * elem.price), 0)
}

return (
    <Shop.Provider value={{ cart, addItem, removeItem, clearCart, total, setcart }}>
    {children}
    </Shop.Provider>
)
}

export default ShopProvider