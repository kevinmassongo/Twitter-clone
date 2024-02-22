import { useState } from "react"

function PostAndDeposter() {

    const [like, setLike] = useState(0),
        [isLike, setIsLike] = useState(false)

    const handleClick = () => {
        setLike(like + (isLike ? -1 : 1))
        setIsLike(!isLike)
    }
    return (
        <>
            <img src="src/icons/Retweet.svg" alt="" className="icon" onClick={handleClick}/>
            <span className="textIcon">{like}</span>
        </>
    )
}
export default PostAndDeposter