

const Stories = () => {
    return(
        <div className="stories">
            <div className="story1">
                <div className="story-box user">
                    <div className="vertical"></div>
                    <div className="horizontal"></div>
                </div>
                <p className="story-text my">My Story</p>
            </div>
            <div className="story2">
                <div className="box">
                    <img className="pic" src="/Images/Profiles/1.jpeg"/>
                </div>
                <p className="story-text other">Lina</p>
            </div>
            <div className="story3">
                <div className="box ">
                    <img className="pic" src="/Images/Profiles/2.jpg"/>
                </div>
                <p className="story-text other">Jenny</p>
            </div>
            <div className="story4 ">
                <div className="box ">
                    <img className="pic" src="/Images/Profiles/3.jpg"/>
                </div>
                <p className="story-text other">Ahmed</p>
            </div>
            <div className="story5 ">
                <div className="box">
                    <img className="pic" src="/Images/Profiles/4.jpg"/>
                </div>
                <p className="story-text other">Johnny</p>
            </div>
            <div className="story6 ">
                <div className="box sixth">
                    <img className="pic" src="/Images/Profiles/5.webp"/>
                </div>
                <p className="story-text other">Johnny</p>
            </div>
            <div className="story7 ">
                <div className="box seventh">
                    <img className="pic" src="/Images/pics/seventh.jpg"/>
                </div>
                <p className="story-text other">Hello</p>
            </div>
            <div className="story8 ">
                <div className="box eight">
                    <img className="pic" src="/Images/Profiles/6.webp"/>
                </div>
                <p className="story-text other">World!</p>
            </div>
        </div>
    );

}

export default Stories;