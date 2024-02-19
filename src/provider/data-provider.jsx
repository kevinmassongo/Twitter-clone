import UserContext from "../components/context/UserContext"
import { useState } from "react"
import Initialize from '../data/initial-data.json'

function ProviderData ({children}) {

    const [tweetData, setTweetData] = useState(Initialize.tweets)

    const SetTweet = (addPost) => {
        setTweetData(addPost)
    }
 
    return (
        <UserContext.Provider value={{tweets : tweetData, SetTweet}}>
            {children}
        </UserContext.Provider>
    )
}

export default ProviderData;