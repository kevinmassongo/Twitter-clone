function LikeAndDislike({ post }) {
    const [like, setLike] = useState(post.textIconOne),
        [isLike, setIsLike] = useState(false)

    const handleClick = () => {
        setLike(like + (isLike ? -1 : 1))
        setIsLike(!isLike)
    }
    console.log(like);
    return (
        <>
            <img src={post.iconOne} alt="" className="icon" onClick={handleClick} />
            <span className="textIcon">{like}</span>
        </>
    )
}
export default LikeAndDislike