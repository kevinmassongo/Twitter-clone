import React, { useContext, useEffect, useState } from 'react';
import ProfilPicture from '../profilPicture';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';

function TweetEditor() {
  const [post, setPost] = useState("")
  const handleChange = (e) => {
    setPost(e.target.value)
  }
  const { tweets, SetTweet} = useContext(UserContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    let addPost;
    addPost = {
      id : new Date().getTime(),
      imageAvatar: "./src/images/profile-photo.png",
      linkAvatar: "./src/images/profile-photo.png",
      TweetTitle: "Bradley Ortiz",
      TweetTitleText: "@bradley",
      TweetLogo: "./src/icons/Verified.png",
      TweetText: post,
      FirstTweetIcon: "src/icons/Reply.svg",
      TextOfTheFirstIcon: 0,
      SecondTweetIcon: "src/icons/Retweet.svg",
      TextOfTheSecondIcon: 0,
      ThirdTweetIcon: "src/icons/React.svg",
      TextOfTheThirdIcon: 0,
      FourthTweetIcon: "src/icons/Share.svg"
    }
    
    SetTweet([addPost, ...tweets])
    setPost("")
  }

  //affichage
  return (
    <div className="tweet-editor">
      <Link to="/profil"><ProfilPicture src="./src/images/profile-photo.png"></ProfilPicture></Link>
      <div className="tweet-editor-form">
        <input className="tweet-editor-input" placeholder="what's happening?" value={post} onChange={handleChange} />
        <div className="tweet-editor-buttons">
          <div className="tweet-editor-actions">
            <img src="src/icons/Gif.png" />
            <img src="src/icons/Vector.png" />
            <img src="src/icons/Poll.png" />
            <img src="src/icons/Group.png" />
            <img src="src/icons/Schedule.png" />
          </div>
          <form action="submit" onSubmit={handleSubmit}>
            <button className="buttons">Tweet</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default TweetEditor;







