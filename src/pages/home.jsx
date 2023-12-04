import React from 'react';
import Header from '../components/header.jsx';
import TweetEditor from '../components/tweet-editor';
import Tweets from '../components/tweets.jsx';

function Home() {
  return (
    <main className="timeline">
      <Header />
      <TweetEditor/>
      <Tweets/>
    </main>
  );
}

export default Home;