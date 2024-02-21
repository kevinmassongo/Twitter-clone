import { useState } from "react"

function LikeAndDislike() {

    // const [like, setLike] = useState(post.TextOfTheThirdIcon),
    //     [isLike, setIsLike] = useState(false)

    // const handleClick = () => {
    //     setLike(like + (isLike ? -1 : 1))
    //     setIsLike(!isLike)
    // }
    const [likeCount, setLikeCount] = useState(0);
    const [liked, setLiked] = useState(false)

    const toggleHeart = () => {
        if(likeCount === 0){
            setLikeCount(likeCount + 1)
            setLiked(true)
        }else {
            setLikeCount(likeCount - 1)
            setLiked(false)
        }
    }
    return (
        <>
            {/* <img src={post.ThirdTweetIcon} alt="" className="icon" onClick={handleClick} />
            <span className="textIcon">{like}</span> */}

            <div className="heart">
                <div className="heart-bg">
                    <div className={`heart-icon ${liked ? 'liked' : ''}` } onClick={toggleHeart}>

                    </div>
                </div>
                <div className="textIcon">
                    {likeCount}
                </div>
            </div>
        </>
    )
}
export default LikeAndDislike