import React, { useEffect, useState } from 'react';
import './Home.css'
import Bookmark from '../BookMark/Bookmark';




const Home = () => {

    const [bookmarks, setBookmark] = useState([])

    useEffect(()=>{
        fetch("product.json")
        .then(res => res.json())
        .then(data => setBookmark(data))
    }, [bookmarks])

    return (
        <div>
           {
            bookmarks.map(bookmark => <Bookmark 
            key = {bookmark.id}
            bookmark = {bookmark}
            ></Bookmark>)
           }
        </div>
    );
};

export default Home;