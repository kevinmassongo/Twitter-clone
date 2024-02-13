function LikeAndDislike({ like , post , handleClick }) {

    return (
        <>
            <img src={post.FirstTweetIcon} alt="" className="icon" onClick={handleClick} />
            <span className="textIcon">{like}</span>
        </>
    )
}
export default LikeAndDislike