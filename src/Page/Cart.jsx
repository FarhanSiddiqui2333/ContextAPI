import React, { useContext, useEffect, useState } from 'react'
import { PassItem } from '../context/ContextData'

const Cart = () => {
    const getCart = useContext(PassItem);
    const availabeCart = getCart.Cart;
    const removeCart = getCart.removeCart;  
    

    return (
        <>
            <h1 className='bg-black text-white text-3xl py-3 text-center'>Hello I Am Cart.jsx</h1>
            <div className='flex flex-wrap gap-6 justify-center py-10'>
                {
                    availabeCart ? availabeCart.map((item, idx) => {
                        return (
                            <div key={idx} className='relative border border-slate-100 border-solid bg-slate-900 w-80 h-max rounded-md text-white flex flex-col justify-between'>
                                <div className='h-2/3 w-full overflow-hidden rounded-md mb-3'>
                                    <img
                                        src={item.image}
                                        alt='Image Loading...'
                                        className='h-full w-full scale-125 transition-all object-cover aspect-square hover:scale-100'
                                    />
                                    <i onClick={() => { removeCart(item) }} className="fa-solid fa-xmark absolute text-slate-900 top-2 left-2 h-5 w-5 text-center rounded-full place-content-center bg-white border border-solid border-slate-900 transition-all cursor-pointer hover:bg-slate-900 hover:text-white"></i>
                                </div>
                                <div className='px-5 pb-5'>
                                    <h1 className='font-bold text-xl h-14 line-clamp-2'>{item.title}</h1>
                                    <h3 className='text-slate-900 bg-white w-max py-1 px-4 rounded-sm text-xs font-bold my-2'>
                                        {item.category}
                                    </h3>
                                    <h4>{item.price + "$"}</h4>
                                </div>
                            </div>
                        )
                    }) : ''
                }
            </div>
        </>
    )
}

export default Cart
