import React from 'react';
import Post from './post';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';


function Tweets(){
  const Data = useContext(UserContext)
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