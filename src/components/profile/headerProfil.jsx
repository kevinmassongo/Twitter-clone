import Paragraph from "../paragraph";

function HeaderProfil() {
    return (
        <>
            <div className="header-profile">
                <div className="arrow-left">
                    <span>&#8592;</span>
                </div>
                <div className="container">
                    <Paragraph className="page-title">Bradley Ortiz</Paragraph>
                    <Paragraph>3 Posts</Paragraph>
                </div>
            </div>
        </>
    )
}

export default HeaderProfil;