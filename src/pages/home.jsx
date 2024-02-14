import React from 'react';
import Header from '../components/timeline/header.jsx';
import TweetEditor from '../components/timeline/tweet-editor.jsx';
import Tweets from '../components/timeline/tweets.jsx';

function Home() {
  return (
    <>
      <main className="timeline">
        <Header />
        <TweetEditor/>
        <Tweets/>
      </main>
    </>
  );
}

export default Home;