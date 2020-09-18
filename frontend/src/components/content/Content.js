
import React, { FunctionComponent, useState, useEffect } from 'react'
import './Content.css'
import { Navbar } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroller';

const Content: FunctionComponent = () => {
    const [arr, setMore] = useState([]);
    const loadFunc = function () {
        let newArr =1;
        setMore(arr=>[...arr,newArr]);
        console.log(arr);
    };


    return (
        <div className="content">
            <InfiniteScroll
                pageStart={0}
                loadMore={loadFunc}
                hasMore={true}
            >
                <div style={{ width: '50px', height: '50px', backgroundColor: 'yellow', padding: '5px' }}></div>
            </InfiniteScroll>
        </div>
    );
}

export default Content