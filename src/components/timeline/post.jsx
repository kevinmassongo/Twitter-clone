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
                <div className="tweet-image">
                    <img src={post.image} />
                </div>
                <div className="tweet-content">
                    <div className="tweet-actions-post">
                        <div className="container firstContainer">
                            <img src={post.iconOne} alt="" className="icon" />
                            <span className="textIcon">{post.textIconOne}</span>
                        </div>
                        <div className="container secondContainer">
                            <img src={post.iconTwo} alt="" className="icon" />
                            <span className="textIcon">{post.textIconTwo}</span>
                        </div>
                        <div className="container thirdContainer">
                            <img src={post.iconThree} alt="" className="icon" />
                            <span className="textIcon">{post.textIconThree}</span>
                        </div>
                        <div className="container fourthContainer">
                            <img src={post.iconFour} alt="" className="icon" />
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Post;