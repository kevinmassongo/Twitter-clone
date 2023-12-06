import Button from "./bouton";

const BodySidebar = () => {
    return (
        <div className="sidebar">
            <div className="home-fill">
                <img src="src/icons/Home-Fill.png" alt="Home-Fill" />
                <h4>Home</h4>
            </div>
            <div className="explore">
                <img src="src/icons/Explore.png" alt="Explore" />
                <h4>Explore</h4>
            </div>
            <div className="notifications">
                <div className="img">
                    <img src="src/images/Group.png" alt="Notification"  className="groups"/>
                    <img src="src/images/Notifications.png" alt="Notification" className="notification"/>
                </div>
                <h4>Notification</h4>
            </div>
            <div className="message">
                <img src="src/icons/messages.png" alt="Message" />
                <h4>Message</h4>
            </div>
            <div className="bookmarks">
                <img src="src/icons/bookmarks.png" alt="Bookmarks" />
                <h4>Bookmarks</h4>
            </div>
            <div className="lists">
                <img src="src/icons/lists.png" alt="lists" />
                <h4>Lists</h4>
            </div>
            <div className="profil">
                <img src="src/icons/Profile.png" alt="profil" />
                <h4>Profile</h4>
            </div>
            <div className="more">
                <img src="src/icons/More.png" alt="more" />
                <h4>More</h4>
            </div>
            <div className="buttonMore">
                <Button>Tweet</Button>
            </div>
        </div>
    )
}

export default BodySidebar;