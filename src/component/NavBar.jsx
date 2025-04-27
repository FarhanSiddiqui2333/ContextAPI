import React from 'react'
import logoIMG from '../assets/logo.png'

const NavBar = () => {

    return (
        <header>
            <div className='cupon'>
                <div>
                    You can use our coupon in order to get <span>Best Deals</span> & <span>Discount</span> & Enjoy your journey with us!
                </div>
                <div>
                    <i className="fa-brands fa-google"></i>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-telegram"></i>
                    <i className="fa-brands fa-linkedin"></i>
                </div>
            </div>
            <div className='logo'>
                    <img src={logoIMG} alt="" />
                <div className="acc">
                    <label>
                        <input type="text" placeholder='Enter item categort...' list='cat' />
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <datalist id='cat'>
                            <option value="audio"></option>
                            <option value="gaming"></option>
                            <option value="mobile"></option>
                            <option value="tv"></option>
                        </datalist>
                    </label>
                    <p>LOGIN</p>
                    <button>SIGN UP</button>
                </div>
            </div>
        </header>
    )
}

export default NavBar
