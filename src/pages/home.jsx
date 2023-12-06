import React from 'react';
import Header from '../components/header.jsx';
import TweetEditor from '../components/tweet-editor';
import Tweets from '../components/tweets.jsx';
import HeaderSidebar from '../components/headersidebar.jsx';
import BodySidebar from '../components/bodysidebar.jsx';

function Home() {
  return (
    <>
      <main>
        <HeaderSidebar />
        <BodySidebar />
      </main>
      <main className="timeline">
        <Header />
        <TweetEditor/>
        <Tweets/>
      </main>
    </>
  );
}

export default Home;