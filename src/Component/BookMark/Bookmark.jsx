import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'


const Bookmark = (props) => {
    const {img, title, name,author,time} = props.bookmark;
    const {handleWathTime} = props;
    return (
        <div>

            <div className=' main_container'>
                <div className='side_one'>
                    <img className='main_img w-100' src={img} alt="" />
                    <div className='top_container'>
                        <div className='autohor_area'>
                            <div className='author_img'>
                                <img src={author} alt="author" />
                            </div>
                            <div className='author_name'>
                                <p className='name'> <small> {name} min</small> </p>
                                <p className='date_area'>Mar 14(4 Days ago)</p>
                            </div>
                        </div>
                        <div>
                            <small>{time}</small>
                            <i className='ms-4' > <FontAwesomeIcon onClick={()=> handleWathTime(time)} icon={faBookBookmark} /></i>
                        </div>
                    </div>
                    <div className='bottom_container'>
                        <h3 className='title'>{title}</h3>
                    </div>
                    <div className='d-flex'>
                        <p className='beginners'>#beginners</p>
                        <p className='programming'>#programming</p>
                    </div>
                    <div >
                        <p className='make_read border-bottom'>Mark as read</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bookmark;