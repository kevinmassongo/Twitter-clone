import React, { useState } from 'react';
import ProfilPicture from '../profilPicture';
function TweetEditor() {

  //etat
  const [post, setpost] = useState([{
    id: 1, nom: "Kevin"
  }])
  const [message, setMessage] = useState("")

  //comportement
  const handleSubmit = (e) => {
    e.preventDefault()
    const copy = [...es]
    console.log(copy);
    const id = new Date().getTime()
    const nom = message
    copy.push({ id: id, nom: nom })
    setpost(b)
    setMessage(' ')
  }

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  //affichage
  return (
    <div className="tweet-editor">
      <ProfilPicture src="./src/images/profile-photo.png"></ProfilPicture>
      <div className="tweet-editor-form">
        <input className="tweet-editor-input" placeholder="what's happening?" value={message} onChange={handleChange} />
        <div className="tweet-editor-buttons">
          <div className="tweet-editor-actions">
            <img src="src/icons/Gif.png" />
            <img src="src/icons/Vector.png" />
            <img src="src/icons/Poll.png" />
            <img src="src/icons/Group.png" />
            <img src="src/icons/Schedule.png" />
          </div>
          <div className="button">
            <form action="submit" onSubmit={handleSubmit}>
              <button className="buttons">Tweet</button>
            </form>
          </div>
        </div>
      </div>
      <ul>
        {post.map((a) =>
          <li key={a.id}>{a.nom}</li>
        )}
      </ul>

    </div>
  )
}
export default TweetEditor;







