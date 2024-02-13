import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import LikeAndDislike from "./like&dislike";

const Post = ({ post }) => {

    const [like, setLike] = useState(post.TextOfTheFirstIcon),
        [isLike, setIsLike] = useState(false)

    const handleClick = () => {
        setLike(like + (isLike ? -1 : 1))
        setIsLike(!isLike)
    }

    return (
        <>
            <div className="tweet-avatar">
                <img src={post.imageAvatar} />
            </div>
            <div className="tweet-body">
                <div className="tweet-title">
                    {post.TweetTitle} <img src={post.TweetLogo} alt="" />
                    <div className="tweet-title-details">
                        <span>{post.TweetTitleText}</span>
                    </div>
                </div>
                <div className="tweet-text">
                    {post.TweetText}
                </div>
                <div className="tweet-image">
                    <img src={post.image} />
                </div>
                <div className="tweet-content">
                    <div className="tweet-actions-post">
                        <div className="container firstContainer">
                            {/* <img src={post.FirstTweetIcon} alt="" className="icon" onClick={handleClick} />
                            <span className="textIcon">{like}</span> */}
                            <LikeAndDislike post={post} like={like} handleClick={handleClick}></LikeAndDislike>
                        </div>
                        <div className="container secondContainer">
                            <img src={post.SecondTweetIcon} alt="" className="icon" />
                            <span className="textIcon">{post.TextOfTheSecondIcon}</span>
                        </div>
                        <div className="container thirdContainer">
                            <img src={post.ThirdTweetIcon} alt="" className="icon" />
                            <span className="textIcon">{post.TextOfTheThirdIcon}</span>
                        </div>
                        <div className="container fourthContainer">
                            <img src={post.FourthTweetIcon} alt="" className="icon" />
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Post;