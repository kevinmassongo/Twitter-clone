import React, { useEffect, useState } from 'react';
import Post from './post';
import { useContext } from 'react';
import UserContext from '../context/UserContext';
import axios from 'axios';

function Tweets() {
  // const data = useContext(UserContext)
  // const Data = data.tweets
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://65d51b503f1ab8c634368e76.mockapi.io/api/1/users')
      .then(response => {
        setPosts(response.data);
        // console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  console.log(posts);
  return (
    <div className="tweets">
      {
        posts.map((post) => {
          return <div className="tweet" key={post.id}>
            <Post post={post} />
          </div>
        })
      }

    </div>
  )
}

export default Tweets