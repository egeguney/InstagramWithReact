

const Posts = () => {

    return(
        <div className="posts">
            <div className="post Camilla">
                <div className="profile-tab">
                    <img className="profile-image" src="Images/Profiles/profile.jpg"/>
                    <div className="texts">
                        <p className="name">Camilla</p>
                        <p className="location">Mexico City, Mexico</p>
                    </div>
                    <p className="three-dot">...</p>
                </div>
                <img className="photo" src="Images/Profiles/post1.jpg"/>
                <div className="interaction-box">
                    <div className="like-box" onClick="">
                        <img className="like" src="Images/Icons/heart.png"/>
                        <p className="like-count">5,4k</p>
                    </div>
                    <div className="comment-box" onClick="">
                        <img className="comment" src="Images/Icons/comment.png"/>
                        <p className="comment-count">165</p>
                    </div>
                    <div className="share-box" onClick="">
                        <img className="share" src="Images/Icons/share.png"/>
                    </div>
                    <div className="save-box" onClick="">
                        <img className="share" src="Images/Icons/Bookmark.png"/>
                    </div>
                </div>
                <div className="bottom-visual">
                    <div className="interacted-profiles">
                        <img className="inter-pic first-pic" src="/Images/Profiles/2.jpg"/>
                        <img className="inter-pic second-pic" src="/Images/Profiles/3.jpg"/>
                        <img className="inter-pic third-pic" src="/Images/Profiles/4.jpg"/>
                    </div>
                    <p className="interacted-people">Aaron, Hank Adams, John, William...</p>
                    <div className="more-box">
                        <p className="more">More</p>
                    </div>
                </div>

            </div>
            <div className="post khokha">
                <div className="profile-tab">
                    <img className="profile-image" src="Images/Profiles/profile2.jpg"/>
                    <div className="texts">
                        <p className="name">Camilla</p>
                        <p className="location">Mexico City, Mexico</p>
                    </div>
                    <p className="three-dot">...</p>
                </div>
                <img className="photo" src="Images/Profiles/post2.jpg"/>
                <div className="interaction-box">
                    <div className="like-box" onClick="">
                        <img className="like" src="Images/Icons/heart.png"/>
                        <p className="like-count">5,4k</p>
                    </div>
                    <div className="comment-box" onClick="">
                        <img className="comment" src="Images/Icons/comment.png"/>
                        <p className="comment-count">165</p>
                    </div>
                    <div className="share-box" onClick="">
                        <img className="share" src="Images/Icons/share.png"/>
                    </div>
                    <div className="save-box" onClick="">
                        <img className="share" src="Images/Icons/Bookmark.png"/>
                    </div>
                </div>
                <div className="bottom-visual">
                    <div className="interacted-profiles">
                        <img className="inter-pic first-pic" src="./Images/Profiles/2.jpg"/>
                        <img className="inter-pic second-pic" src="./Images/Profiles/3.jpg"/>
                        <img className="inter-pic third-pic" src="./Images/Profiles/4.jpg"/>
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