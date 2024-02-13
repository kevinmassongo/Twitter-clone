import { useState } from "react"

function CommentAndUncomment({ post }) {

    const [like, setLike] = useState(post.TextOfTheFirstIcon),
        [isLike, setIsLike] = useState(false)

    const handleClick = () => {
        setLike(like + (isLike ? -1 : 1))
        setIsLike(!isLike)
    }
    return (
        <>
            <img src={post.FirstTweetIcon} alt="" className="icon" onClick={handleClick} />
            <span className="textIcon">{like}</span>
        </>
    )
}
export default CommentAndUncomment