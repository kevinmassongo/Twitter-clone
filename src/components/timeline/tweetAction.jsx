const TweetAction = ({icon, value}) => {
    return  (
              <div className="tweet-action">
                <img src={icon}  alt="" />
                <span>{value}</span>
              </div>
    )
  }
export default TweetAction