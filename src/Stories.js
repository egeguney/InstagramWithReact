import First from './Images/Profiles/1.jpeg'
import Second from './Images/Profiles/2.jpg'
import Third from './Images/Profiles/3.jpg'
import Fourth from './Images/Profiles/4.jpg'
import Fifth from './Images/Profiles/5.webp'
import Sixth from './Images/Profiles/6.webp'
import Seventh from './Images/pics/seventh.jpg'


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
                    <img className="pic" src={First}/>
                </div>
                <p className="story-text other">Lina</p>
            </div>
            <div className="story3">
                <div className="box ">
                    <img className="pic" src={Second}/>
                </div>
                <p className="story-text other">Jenny</p>
            </div>
            <div className="story4 ">
                <div className="box ">
                    <img className="pic" src={Third}/>
                </div>
                <p className="story-text other">Ahmed</p>
            </div>
            <div className="story5 ">
                <div className="box">
                    <img className="pic" src={Fourth}/>
                </div>
                <p className="story-text other">Johnny</p>
            </div>
            <div className="story6 ">
                <div className="box sixth">
                    <img className="pic" src={Fifth}/>
                </div>
                <p className="story-text other">Johnny</p>
            </div>
            <div className="story7 ">
                <div className="box seventh">
                    <img className="pic" src={Sixth}/>
                </div>
                <p className="story-text other">Hello</p>
            </div>
            <div className="story8 ">
                <div className="box eight">
                    <img className="pic" src={Seventh}/>
                </div>
                <p className="story-text other">World!</p>
            </div>
        </div>
    );

}

export default Stories;