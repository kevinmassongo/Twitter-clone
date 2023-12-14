import TweetAction from "./tweetAction"

const TweetActions = () => {
    return(
           <div className="tweet-actions">
             <TweetAction icon="src/icons/Reply.png"/>
             <TweetAction icon="src/icons/Retweet.png"/>
             <TweetAction icon="src/icons/React.png"/>
             <TweetAction icon="src/icons/Share.png"/>
           </div>
        )
   }

   export default TweetActions