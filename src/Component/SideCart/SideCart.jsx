import React, { useEffect, useState } from 'react';
import './SideCart.css'

const SideCart = ({ watchTime, bookMarkItem }) => {
    const [time, setTime] = useState(watchTime)

    useEffect(() => {
        const getWatchTimeFromLocalStroage = JSON.parse(localStorage.getItem("watchTime"))
        setTime(getWatchTimeFromLocalStroage);
    }, [watchTime])

    return (
        <div className=' align-items-center justify-content-center w-100 text-center  mt-2 '>
            <p className='mb-3 fw-bold text-center sideCart d-flex align-items-center justify-content-center'>Spent time on read : {time} min</p>

            <div className='card'>

                {
                    bookMarkItem.map(bM => <p className='card mb-4 mt-4 text-center sideCartBottomtwo Small shadow p-3'>{bM.title}</p>)
                }


            </div>
        </div>

    );
};

export default SideCart;