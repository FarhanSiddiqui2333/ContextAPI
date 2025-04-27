import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const PassItem = createContext()

const ContextData = ({ children }) => {

    const [itemData, setItemData] = useState()
    const [Cart, setCart] = useState([])
    const API = 'https://fakestoreapi.com/products'

    async function getAPI() {
        let getting = await axios.get(API)
        let filterData = await getting.data
        console.log(filterData);
        setItemData(filterData)
    }
    useEffect(() => {
        getAPI()
    }, [])

    const removeCart = (item) => {
        setCart(prevCart => prevCart.filter(i => i !== item));     
    }
    
    

    return (
        <div>
            <PassItem.Provider value={{ itemData, setCart, Cart, removeCart }}>
                {children}
            </PassItem.Provider>
        </div>
    )
}

export default ContextData
