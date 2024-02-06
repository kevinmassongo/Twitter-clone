import React from 'react';
import Data from './data';
import Post from './post';


function Tweets(){
  return(
          <div className="tweets">
              {
              Data.map((post) => {
                return <div className="tweet" key={post.id}>
                        <Post post={post} ></Post>
                      </div>
              })
              }
       
          </div>
      )
}

export default Tweets