import { Link } from "react-router-dom";
import HomeIMG from './Images/HomeFeed/Home.png';
import SearchIMG from './Images/HomeFeed/Search.png';
import AddPost from './Images/HomeFeed/Tick-Square.png';
import Likes from './Images/HomeFeed/Heart-plus.png';
import ProfileIMG from './Images/HomeFeed/Profile.png';

const NavBar = () => {
    return(
        <div className="selector-container">
            <div className="selectors">
                <div className="home">
                    <Link to={"/"}>
                        <img className="img" src={HomeIMG}/>
                    </Link>
                </div>
                <div className="searchIMG">
                    <Link to={"/search"}>
                        <img className="img" src={SearchIMG}/>
                    </Link>
                </div>
                <div className="add-post">
                    <img className="img" src={AddPost}/>
                </div>
                <div className="likes">
                    <img className="img likes" src={Likes}/>
                </div>
                <div className="my-profile">
                    <Link to={"/profile"}>
                        <img className="profile-img" src={ProfileIMG}/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;