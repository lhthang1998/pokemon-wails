
import React, { FunctionComponent } from 'react'
import './Content.css'
import { Navbar } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroller';

const Content: FunctionComponent = () => {
    var int = [];
    const loadFunc =function(){
        fetch('https://dog.ceo/api/breeds/image/random/15')
        .then(res => {
          return !res.ok 
          ? res.json().then(e => Promise.reject(e)) 
          : res.json();
        })
        .then(res => {
          int.push(...res.message);
        });
    };


    return (
        <div className="content">
            <InfiniteScroll
                pageStart={0}
                loadMore={loadFunc}
                hasMore={true}
            >
                <div style={{width:'50px',height:'50px',backgroundColor:'yellow',padding:'5px'}}></div>
            </InfiniteScroll>
        </div>
    );
}

export default Content