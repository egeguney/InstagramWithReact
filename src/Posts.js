import Camilla from './Images/Profiles/profile.jpg'
import Post1 from './Images/Profiles/post1.jpg'
import Heart from './Images/Icons/heart.png'
import Comment from './Images/Icons/comment.png'
import Share from './Images/Icons/share.png'
import Bookmark from './Images/Icons/Bookmark.png'
import First from './Images/Profiles/1.jpeg'
import Second from './Images/Profiles/2.jpg'
import Third from './Images/Profiles/3.jpg'
import Khoka from './Images/Profiles/profile2.jpg'
import Post2 from './Images/Profiles/post2.jpg'
import create from 'zustand'

const useStore = create(set => ({
    count1: 1,
    inc1: () => set(state => ({ count1: state.count1 + 1 })),
    count2:2,
    inc2: () => set(state => ({ count2: state.count2 + 1 })),
}))



const Posts = () => {

    const incFor1 = useStore(state => state.inc1);
    const incFor2 = useStore(state => state.inc2);
    const countFor1 = useStore(state => state.count1);
    const countFor2 = useStore(state => state.count2);
    return(
        <div className="posts">
            <div className="post Camilla">
                <div className="profile-tab">
                    <img className="profile-image" src={Camilla}/>
                    <div className="texts">
                        <p className="name">Camilla</p>
                        <p className="location">Mexico City, Mexico</p>
                    </div>
                    <p className="three-dot">...</p>
                </div>
                <img className="photo" src={Post1}/>
                <div className="interaction-box">
                    <div className="like-box" onClick={incFor1}>
                        <img className="like" src={Heart}/>
                        <p className="like-count">{509 + countFor1}</p>
                    </div>
                    <div className="comment-box" onClick="">
                        <img className="comment" src={Comment}/>
                        <p className="comment-count">165</p>
                    </div>
                    <div className="share-box" onClick="">
                        <img className="share" src={Share}/>
                    </div>
                    <div className="save-box" onClick="">
                        <img className="share" src={Bookmark}/>
                    </div>
                </div>
                <div className="bottom-visual">
                    <div className="interacted-profiles">
                        <img className="inter-pic first-pic" src={First}/>
                        <img className="inter-pic second-pic" src={Second}/>
                        <img className="inter-pic third-pic" src={Third}/>
                    </div>
                    <p className="interacted-people">Aaron, Hank Adams, John, William...</p>
                    <div className="more-box">
                        <p className="more">More</p>
                    </div>
                </div>

            </div>
            <div className="post khokha">
                <div className="profile-tab">
                    <img className="profile-image" src={Khoka}/>
                    <div className="texts">
                        <p className="name">Camilla</p>
                        <p className="location">Mexico City, Mexico</p>
                    </div>
                    <p className="three-dot">...</p>
                </div>
                <img className="photo" src={Post2}/>
                <div className="interaction-box">
                    <div className="like-box" onClick={incFor2}>
                        <img className="like" src={Heart}/>
                        <p className="like-count">{289 + countFor2}</p>
                    </div>
                    <div className="comment-box" onClick="">
                        <img className="comment" src={Comment}/>
                        <p className="comment-count">165</p>
                    </div>
                    <div className="share-box" onClick="">
                        <img className="share" src={Share}/>
                    </div>
                    <div className="save-box" onClick="">
                        <img className="share" src={Bookmark}/>
                    </div>
                </div>
                <div className="bottom-visual">
                    <div className="interacted-profiles">
                        <img className="inter-pic first-pic" src={First}/>
                        <img className="inter-pic second-pic" src={Second}/>
                        <img className="inter-pic third-pic" src={Third}/>
                    </div>
                    <p className="interacted-people">Aaron, Hank Adams, John, William...</p>
                    <div className="more-box">
                        <p className="more">More</p>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default Posts;