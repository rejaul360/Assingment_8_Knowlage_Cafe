import React, { useEffect, useState } from 'react';
import './SideCart.css'

const SideCart = ({watchTime}) => {
    const [time, setTime] = useState(watchTime)
    useEffect(()=>{
        const getWatchTimeFromLocalStroage = JSON.parse(localStorage.getItem("watchTime"))
        setTime(getWatchTimeFromLocalStroage);
    }, [watchTime])
    return (
        <div className='d-flex align-items-center justify-content-center w-100 text-center  mt-2'>
            <p className=' text-center sideCart d-flex align-items-center justify-content-center'>Spent time on read : {time} min</p>
        </div>
    );
};

export default SideCart;