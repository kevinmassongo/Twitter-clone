import { useState } from "react"

function LikeAndDislike() {

    const [likes, setLikes] = useState(99),
        [isLike, setIsLike] = useState(false)

    const handleClick = () => {
        setLikes(likes + (isLike ? -1 : 1))
        setIsLike(!isLike)
    }

    return (
        <>
            <img src="src/icons/React.svg" alt="" className="icon" onClick={handleClick} />
            <span className="textIcon">{likes}</span>
        </>
    )
}
export default LikeAndDislike