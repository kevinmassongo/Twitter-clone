import React from 'react';
import Header from '../components/header.jsx';
import TweetEditor from '../components/tweet-editor';
import Tweets from '../components/tweets.jsx';
import HeaderLeftSidebar from '../components/headerleftsidebar.jsx';
import BodyLeftSidebar from '../components/bodyleftsidebar.jsx';
import FooterLeftSidebar from '../components/footerleftsidebar.jsx';
import HeaderRightSidebar from '../components/headerrightsidebar.jsx';

function Home() {
  return (
    <>
      <main className='left-sidebar'>
        <HeaderLeftSidebar />
        <BodyLeftSidebar />
        <FooterLeftSidebar />
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