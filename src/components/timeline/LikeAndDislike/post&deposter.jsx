import { useState } from "react"

function PostAndDeposter({ post }) {

    const [like, setLike] = useState(post.TextOfTheSecondIcon),
        [isLike, setIsLike] = useState(false)

    const handleClick = () => {
        setLike(like + (isLike ? -1 : 1))
        setIsLike(!isLike)
    }
    return (
        <>
            <img src={post.SecondTweetIcon} alt="" className="icon" onClick={handleClick}/>
            <span className="textIcon">{like}</span>
        </>
    )
}
export default PostAndDeposter