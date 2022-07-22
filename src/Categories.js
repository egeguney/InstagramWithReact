

const Categories = () => {
    return(
        <div className="categories">
            <div className="Reels select">
                <img className="category-icon" src="Images/Icons/reels.png"/>
                <p className="category-text">Reels</p>
            </div>
            <div className="IGTV select">
                <img className="category-icon" src="Images/Icons/igtv.png"/>
                <p className="category-text">IGTV</p>
            </div>
            <div className="Store select">
                <img className="category-icon" src="Images/Icons/Bag.png"/>
                <p className="category-text">Store</p>
            </div>
            <div className="Games select">
                <img className="category-icon" src="Images/Icons/Game.png"/>
                <p className="category-text">Games</p>
            </div>
        </div>
    );
}

export default Categories;