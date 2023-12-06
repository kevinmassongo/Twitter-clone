import ProfilPicture from "./profilPicture";

const FooterSidebar = () => {
    const Noun = () => {
        return (
            <div className="contentNoun">
                <div className="contentOne">
                    <p>Bradley Ortiz</p>
                    <p>@bradley</p>
                </div>
                <div className="contentTwo">
                    <img src="./src/icons/private.png" alt="Private" />
                </div>
            </div>
        )
    }
    const IconMore = () => {
        return (
            <div>
                <img src="./src/icons/More-2.png" alt="More-2" />
            </div>
        )
    }
    return (
        <div className="contentFooter">
            <ProfilPicture/>
            <Noun/>
            <IconMore/>
        </div>
    )
}

export default FooterSidebar;