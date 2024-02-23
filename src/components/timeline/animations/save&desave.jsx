import { faShare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function SaveAndDesave() {
    return (
        <>
            <FontAwesomeIcon icon={faShare} style={{ fontSize: '25px' }} onMouseOver={(e) => e.target.style.filter = 'rgb(30,144,255)'} onMouseOut={(e) => e.target.style.filter = 'drop-shadow(0 0 1px rgb(47,51,54))'} />
        </>
    )
}

export default SaveAndDesave