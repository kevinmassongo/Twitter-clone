import React from 'react';
import Header from '../components/header.jsx';
import TweetEditor from '../components/tweet-editor';
import Tweets from '../components/tweets.jsx';
import Sidebar from '../components/sidebar/sidebar.jsx';
import Trends from '../components/trends.jsx';

function Home() {
  return (
    <>
      <main className='left-sidebar'>
        <Sidebar />
      </main>
      <main className="timeline">
        <Header />
        <TweetEditor/>
        <Tweets/>
      </main>
      <main className="right-sidebar">
        <Trends />
      </main>
    </>
  );
}

export default Home;