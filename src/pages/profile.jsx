import { Outlet } from "react-router-dom";
import HeaderProfil from "../components/profile/headerProfil";
import TweetEditorProfile from "../components/profile/tweetEditorProfile";
import Tweets from "../components/timeline/tweets";

const Profile = () => {
  return (
    <>
    <main className="timeline-profile">
      <HeaderProfil />
      <TweetEditorProfile />
      <Tweets />
    </main>
    
    </>
  )
}
export default Profile;