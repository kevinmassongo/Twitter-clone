import React from 'react';
import Header from '../components/header.jsx';
import TweetEditor from '../components/tweet-editor';
import Tweets from '../components/tweets.jsx';
import HeaderRightSidebar from '../components/trends.jsx';
import Sidebar from '../components/sidebar.jsx';

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
        <HeaderRightSidebar />
      </main>
    </>
  );
}

export default Home;