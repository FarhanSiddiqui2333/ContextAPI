import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import { PassItem } from './context/ContextData';
import { Link, Route, Routes } from 'react-router-dom';
import Cart from './Page/Cart';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Feedback from './component/Feedback';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Feedback/>
      <Footer />
    </>
  )
}

export default App


const Home = () => {
  const dataGetting = useContext(PassItem)
  const [getProduct, setGetProduct] = useState([])
  const data = dataGetting.itemData

  useEffect(() => {
    if (data && data.length > 0) {
      setGetProduct(data)
      console.log(getProduct);

    } else {
      setGetProduct([])
    }
  }, [data])


  const cartdata = dataGetting.setCart
  const cartPass = (item) => {
    if (item) {
      cartdata((prevCart) => {
        const alreadyExists = prevCart.some(cartItem => cartItem.id === item.id);
        if (!alreadyExists) {
          return [...prevCart, item];
        }
        return prevCart;
      });

    }
  };



  return (
    <>
      <Hero />

      <div className='flex flex-wrap gap-6 justify-center py-5'>
        {getProduct.length > 0 ? (
          getProduct.map((item, idx) => (
            <div key={idx} className='border border-slate-100 border-solid bg-slate-900 w-80 h-max rounded-md text-white flex flex-col justify-between'>
              <div className='h-2/3 w-full overflow-hidden rounded-md mb-3'>
                <img
                  src={item.image}
                  alt='Image Loading...'
                  className='h-full w-full transition-all aspect-square'
                />
              </div>
              <div className='px-5 pb-5'>
                <h1 className='font-bold text-xl h-14 line-clamp-2'>{item.title}</h1>
                <h3 className='text-slate-900 bg-white w-max py-1 px-4 rounded-sm text-xs font-bold my-2'>
                  {item.category}
                </h3>
                <h4>{item.price + "$"}</h4>
                <Link to='/cart'>
                  <button onClick={() => { cartPass(item) }}
                    className='bg-white text-slate-900 mt-2 transition-all w-full font-bold border-2 border-solid border-transparent rounded-sm py-2 hover:bg-transparent hover:text-white hover:border-white'>
                    Add More
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">Loading products...</p>
        )}
      </div>
    </>
  )
}