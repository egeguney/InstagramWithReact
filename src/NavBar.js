import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="selector-container">
            <div className="selectors">
                <div className="home">
                    <Link to={"/"}>
                        <img className="img" src="Images/HomeFeed/Home.png"/>
                    </Link>
                </div>
                <div className="search">
                    <Link to={"/Search"}>
                        <img className="img" src="Images/HomeFeed/Search.png"/>
                    </Link>
                </div>
                <div className="add-post">
                    <img className="img" src="Images/HomeFeed/Tick-Square.png"/>
                </div>
                <div className="likes">
                    <img className="img likes" src="Images/HomeFeed/Heart-plus.png"/>
                </div>
                <div className="my-profile">
                    <Link to={"/Profile"}>
                        <img className="profile-img" src="Images/HomeFeed/Profile.png"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;