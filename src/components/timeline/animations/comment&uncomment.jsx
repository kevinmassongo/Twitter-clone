import { faComment, faCommentAlt, faCommentDollar, faCommentDots, faCommentSlash, faCommentSms, faComments} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

function CommentAndUncomment() {

    const [reply, setReply] = useState(99),
        [isReply, setIsReply] = useState(false)

    const handleClick = () => {
        setReply(reply + (isReply ? -1 : 1))
        setIsReply(!isReply)
    }
    return (
        <>
            <div className="box-reply">
                <FontAwesomeIcon icon={faComment} style={{ color: isReply ? 'rgb(30,144,255)' : '', filter: isReply ? '' : 'drop-shadow(0 0 1px rgb(47,51,54))', fontSize: '25px' }} onClick={handleClick} onMouseOver={(e) => e.target.style.filter = 'rgb(30,144,255)'} onMouseOut={(e) => e.target.style.filter = 'drop-shadow(0 0 1px rgb(47,51,54))'} />
                <span className="textIcon">{reply}</span>
            </div>
        </>
    )
}
export default CommentAndUncomment