import { Link } from "react-router-dom";

const HeaderSidebar = () => {
    return (
        <>
            <div className="headersidebar">
                <Link to="/home"><img src="./src/icons/Twitter.png" alt="" /></Link>
            </div>
        </>
    )    
}

export default HeaderSidebar;