import React from 'react'
import heroImg from '../assets/ecommerHero.png'


const Hero = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <h4>We Offer Possibilities In Every Direction</h4>
                <h1>Don't delay - purchase today!</h1>
                <p>E-commerce, or electronic commerce, refers to the buying and selling of goods and services online. It involves transactions conducted over the internet, using computers, tablets, smartphones, and other devices. Essentially, it's online trading. </p>
                <ul>
                    <li><i className="fa-solid fa-check"></i> Online Transactions (buying and selling)</li>
                    <li><i className="fa-solid fa-check"></i> Diverse Platforms (Social Media)</li>
                    <li><i className="fa-solid fa-check"></i> Global Reach (Business)</li>
                    <li><i className="fa-solid fa-check"></i> Convenience (24/7)</li>
                </ul>
                <button>SHOP NOW <i className="fa-solid fa-shirt"></i></button>
            </div>
            <div>
                <img src={heroImg} alt="" />
            </div>
        </div>
    )
}

export default Hero