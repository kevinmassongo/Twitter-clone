import React, { useContext, useState } from 'react';
import ProfilPicture from '../profilPicture';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function TweetEditor() {

  //SANS REACT HOOK FORM

  // const [post, setPost] = useState("")
  // const handleChange = (e) => {
  //   setPost(e.target.value)
  // }
  // const { tweets, SetTweet } = useContext(UserContext)

  //////////////////////////////////

  const [formData, setFormData] = useState({
    TweetText: "",
  })

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: formData })

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   let addPost;
  //   addPost = {
  //     id : new Date().getTime(),
  //     imageAvatar: "./src/images/profile-photo.png",
  //     linkAvatar: "./src/images/profile-photo.png",
  //     TweetTitle: "Bradley Ortiz",
  //     TweetTitleText: "@bradley",
  //     TweetLogo: "./src/icons/Verified.png",
  //     TweetText: post,
  //     FirstTweetIcon: "src/icons/Reply.svg",
  //     TextOfTheFirstIcon: 0,
  //     SecondTweetIcon: "src/icons/Retweet.svg",
  //     TextOfTheSecondIcon: 0,
  //     ThirdTweetIcon: "src/icons/React.svg",
  //     TextOfTheThirdIcon: 0,
  //     FourthTweetIcon: "src/icons/Share.svg"
  //   }

  //   if(post.length != 0){
  //     SetTweet([addPost, ...tweets])
  //   }
  //   setPost("")
  // }

  //AVEC REACT HOOK FORM

  const onSubmit = async (users) => {
    // console.log(data);
    // alert(data.TweetText)
    // let addPost;
    // addPost = {
    //   id: new Date().getTime(),
    //   imageAvatar: "./src/images/profile-photo.png",
    //   linkAvatar: "./src/images/profile-photo.png",
    //   TweetTitle: "Bradley Ortiz",
    //   TweetTitleText: "@bradley",
    //   TweetLogo: "./src/icons/Verified.png",
    //   TweetText: data.TweetText,
    //   FirstTweetIcon: "src/icons/Reply.svg",
    //   TextOfTheFirstIcon: 0,
    //   SecondTweetIcon: "src/icons/Retweet.svg",
    //   TextOfTheSecondIcon: 0,
    //   ThirdTweetIcon: "src/icons/React.svg",
    //   TextOfTheThirdIcon: 0,
    //   FourthTweetIcon: "src/icons/Share.svg"
    // }

    try {
      const response = await axios.post('https://65d51b503f1ab8c634368e76.mockapi.io/api/1/users', users);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

    // SetTweet([addPost, ...tweets])
    setValue('TweetText', " ")
  }

  //affichage
  return (
    <div className="tweet-editor">
      <Link to="/profile"><ProfilPicture src="./src/images/profile-photo.png"></ProfilPicture></Link>
      <div className="tweet-editor-form">
        <input className="tweet-editor-input" placeholder="what's happening?" name='TweetText' {...register("TweetText", {
          minLength : 3,
          message : "minimum 3 caractères"
        })} />
        {errors.TweetText && (
          <span style={{ color: "red" }}>
            {errors.TweetText.message}
          </span>
        )}
        <div className="tweet-editor-buttons">
          <div className="tweet-editor-actions">
            <img src="src/icons/Gif.png" />
            <img src="src/icons/Vector.png" />
            <img src="src/icons/Poll.png" />
            <img src="src/icons/Group.png" />
            <img src="src/icons/Schedule.png" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <button className="buttons" type='submit'>Tweet</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default TweetEditor;







