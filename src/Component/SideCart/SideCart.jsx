import React, { useEffect, useState } from 'react';
import './SideCart.css'

const SideCart = ({watchTime,bookMarkItem}) => {
    const [time, setTime] = useState(watchTime)
    
    useEffect(()=>{
        const getWatchTimeFromLocalStroage = JSON.parse(localStorage.getItem("watchTime"))
        setTime(getWatchTimeFromLocalStroage);
    }, [watchTime])

    return (
        <div className=' align-items-center justify-content-center w-100 text-center  mt-2'>
            <p className='mb-3 text-center sideCart d-flex align-items-center justify-content-center'>Spent time on read : {time} min</p>

            <div>
  
                {
                        bookMarkItem.map( bM => <p className='card mb-4 text-center sideCartBottom'>{bM.title}</p>)
                } 


            </div>
        </div>

    );
};

export default SideCart;