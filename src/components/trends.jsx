import Setting from "./setting"

const Trends = () => {
    const HeaderTrends = () => {
        return (
            <>
                <div className="contentheadertrends">
                    <img src="./src/icons/search.png" alt="" />
                    <p>Search Twitter</p>
                </div>
            </>
        )
        
    }
    const BodyTrends = () => {
        return (
            <>
                <div className="contentbodytrends">
                    <h1>Trends for you</h1>
                    <Setting />
                </div>
            </>
        )
        
    }
    return (
        <>
            <HeaderTrends />
            <BodyTrends />
        </>
        )
}

export default Trends;