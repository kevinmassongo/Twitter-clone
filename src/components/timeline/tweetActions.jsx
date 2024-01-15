import Paragraph from "../paragraph"
import TweetAction from "./tweetAction"

const TweetActions = () => {
    return(
           <div className="tweet-actions">
              <div className="container firstContainer">
                <TweetAction icon="src/icons/Reply.svg" style="icon"/>
                <Paragraph style="textIconOne">7.3K</Paragraph>
              </div>
              <div className="container secondContainer">
                <TweetAction icon="src/icons/Retweet.svg" style="icon"/>
                <Paragraph style="textIconOne">8.2K</Paragraph>
              </div>
              <div className="container  thirdContainer">
                <TweetAction icon="src/icons/React.svg" style="icon"/>
                <Paragraph style="textIconOne">71K</Paragraph>
              </div>
              <div className="container  fourthContainer">
                <TweetAction icon="src/icons/Share.svg" style="icon"/>
              </div>
           </div>
        )
   }

   export default TweetActions