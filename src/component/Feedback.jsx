import React, { useEffect, useState } from 'react'
import img from '../assets/feed.png'
import axios from 'axios'

const Feedback = () => {
    let API = 'https://api.escuelajs.co/api/v1/users'
    const [getData, setGetData] = useState([])
    const getAPI = async () => {
        let result = await axios.get(API)
        let resultData = await result.data
        if (resultData && resultData !== '') {
            let FilterProfile = resultData.filter(item => item.id < 5)
            setGetData(FilterProfile)
        }
    }
    useEffect(() => {
        getAPI()
    }, [])

    return (
        <>
            <div className='feedContainer'>
                <div className='feed'>
                    <div className="feedContent">
                        <h2>Send Your Greate Feedback & Rate our Website</h2>
                        <textarea placeholder='Send your greate feedback...'></textarea>
                    </div>
                    <div className="feedbg">
                        <img src={img} alt="" />
                        <button>SEND FEEDBACK</button>
                    </div>
                </div>
            </div>
            <div className='mainRatingSec'>
                {
                    getData.length > 0 ? getData.map((item) => {
                        return (
                            <div className='rate'>
                                <div className='profile'>
                                    <img src={item.avatar} alt="avatar" />
                                    <div className="info">
                                        <p>{item.name}</p>
                                        <span>{item.email}</span>
                                    </div>
                                </div>
                                <div className="rating">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                        )
                    }) : ""
                }
            </div>
        </>
    )
}

export default Feedback