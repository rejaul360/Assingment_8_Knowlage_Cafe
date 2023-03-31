import React, { useEffect, useState } from 'react';
import './SideCart.css'

const SideCart = ({watchTime}) => {
    const [time, setTime] = useState(watchTime)
    useEffect(()=>{
        const getWatchTimeFromLocalStroage = JSON.parse(localStorage.getItem("watchTime"))
        setTime(getWatchTimeFromLocalStroage);
    }, [watchTime])

    const [bookmarks, setBookmark] = useState([])

    useEffect(()=>{
        fetch("product.json")
        .then(res => res.json())
        .then(data => setBookmark(data))
    }, [bookmarks])

    return (
        <div className=' align-items-center justify-content-center w-100 text-center  mt-2'>
            <p className='mb-3 text-center sideCart d-flex align-items-center justify-content-center'>Spent time on read : {time} min</p>

            <div>
                <h5 className='card mb-5 text-center sideCartBottom d-flex align-items-center justify-content-center'>hello</h5>
                
            </div>
        </div>

    );
};

export default SideCart;