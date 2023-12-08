import React from 'react';
import Button from './bouton';
import ProfilPicture from './profilPicture';
 function TweetEditor(){
  return(
    <div className="tweet-editor">
        <ProfilPicture src="./src/images/profile-photo.png"></ProfilPicture>
        <div className="tweet-editor-form">
          <input className="tweet-editor-input" placeholder="what's happening?" />
          <div className="tweet-editor-buttons">
            <div className="tweet-editor-actions">
              <img src="src/icons/Gif.png"  />
              <img src="src/icons/Vector.png"  />
              <img src="src/icons/Poll.png"  />
              <img src="src/icons/Group.png"  />
              <img src="src/icons/Schedule.png"  />
            </div>
            <div className="button">
            <Button>Tweet</Button>
            </div>
         </div>
        </div>
    </div>
  )
}
export default TweetEditor;







