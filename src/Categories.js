import Reels from "./Images/Icons/reels.png";
import IGTV from "./Images/Icons/igtv.png";
import Store from "./Images/Icons/Bag.png";
import Game from "./Images/Icons/Game.png";

const Categories = () => {
    return(
        <div className="categories">
            <div className="Reels select">
                <img className="category-icon" src={Reels}/>
                <p className="category-text">Reels</p>
            </div>
            <div className="IGTV select">
                <img className="category-icon" src={IGTV}/>
                <p className="category-text">IGTV</p>
            </div>
            <div className="Store select">
                <img className="category-icon" src={Store}/>
                <p className="category-text">Store</p>
            </div>
            <div className="Games select">
                <img className="category-icon" src={Game}/>
                <p className="category-text">Games</p>
            </div>
        </div>
    );
}

export default Categories;