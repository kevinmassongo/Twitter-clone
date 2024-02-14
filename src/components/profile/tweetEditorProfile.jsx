import Button from "../bouton"
import Paragraph from "../paragraph"
import ProfilPicture from "../profilPicture"

function TweetEditorProfile() {
    return (
        <>
            <div className="tweet-editor-profile-container">
                <div className="empty-container">

                </div>
                <div className="container">
                    <div className="profile-picture">
                        <ProfilPicture src="./src/images/profile-photo.png"></ProfilPicture>
                        <div className="box">
                            <Paragraph className="page-title">Bradley Ortiz</Paragraph>
                            <Paragraph>@bradley</Paragraph>
                        </div>
                    </div>
                    <div className="edit-profile">
                        <Button style="button-edit">Edit profile</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TweetEditorProfile