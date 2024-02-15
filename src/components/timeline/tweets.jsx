import React from 'react';
import Post from './post';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

function Tweets() {
  const data = useContext(UserContext)
  const Data = data.tweets
  return (
    <div className="tweets">
      {
        Data.map((post) => {
          return <div className="tweet" key={post.id}>
            <Post post={post} />
          </div>
        })
      }

    </div>
  )
}

export default Tweets