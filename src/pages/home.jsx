import React from 'react';
import Header from '../components/header.jsx';
import TweetEditor from '../components/tweet-editor';
import Tweets from '../components/tweets.jsx';
import HeaderSidebar from '../components/headersidebar.jsx';
import BodySidebar from '../components/bodysidebar.jsx';
import FooterSidebar from '../components/footersidebar.jsx';

function Home() {
  return (
    <>
      <main className='left-sidebar'>
        <HeaderSidebar />
        <BodySidebar />
        <FooterSidebar />
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