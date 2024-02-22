import LikeAndDislike from "./animations/like&dislike";
import CommentAndUncomment from "./animations/comment&uncomment";
import PostAndDeposter from "./animations/post&reposter";
import { Link } from "react-router-dom";
import SaveAndDesave from "./animations/save&desave";

const Post = ({ post }) => {

    return (
        <>
            <div className="tweet-avatar">
                <Link to="/profile"><img src={post.imageAvatar}/></Link>
            </div>
            <div className="tweet-body">
                <div className="tweet-title">
                    {post.TweetTitle} <img src="./src/icons/Verified.png" alt="" />
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
                            <CommentAndUncomment />
                        </div>
                        <div className="container secondContainer">
                            <PostAndDeposter/>
                        </div>
                        <div className="contentOfLike thirdContainer">
                            <LikeAndDislike/>
                        </div>
                        <div className="container fourthContainer">
                            <SaveAndDesave/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Post;