const Post = ({ post }) => {
    return (
        <>
            <div className="tweet-avatar">
                <img src={post.imageAvatar} />
            </div>
            <div className="tweet-body">
                <div className="tweet-title">
                    {post.title} <img src={post.imageTitle} alt="" /> 
                    <div className="tweet-title-details">
                        <span>{post.spanTitle}</span> 
                    </div> 
                </div>
                <div className="tweet-text">
                    {post.paragraph}
                </div>
                <div className="tweet-content">
                    <div className="tweet-actions">
                        <div className="tweet-action">
                            <img src={post.iconOne} alt="" />
                            <span></span>
                        </div>
                        <div className="tweet-action">
                            <img src={post.iconTwo} alt="" />
                            <span></span>
                        </div>
                        <div className="tweet-action">
                            <img src={post.iconThree} alt="" />
                            <span></span>
                        </div>
                        <div className="tweet-action">
                            <img src={post.iconFour} alt="" />
                            <span></span>
                        </div>                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Post;