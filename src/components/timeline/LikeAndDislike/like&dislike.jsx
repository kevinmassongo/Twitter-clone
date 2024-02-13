import { useState } from "react"

function LikeAndDislike({ post }) {

    const [like, setLike] = useState(post.TextOfTheThirdIcon),
        [isLike, setIsLike] = useState(false)

    const handleClick = () => {
        setLike(like + (isLike ? -1 : 1))
        setIsLike(!isLike)
    }
    return (
        <>
            <img src={post.ThirdTweetIcon} alt="" className="icon" onClick={handleClick} />
            <span className="textIcon">{like}</span>
        </>
    )
}
export default LikeAndDislike