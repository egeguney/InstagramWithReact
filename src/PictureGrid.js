
import pic1 from "./Images/pics/first.jpg";
import pic2 from "./Images/pics/second.jpg";
import pic3 from "./Images/pics/third.jpg";
import pic4 from "./Images/pics/fourth.jpg";
import pic5 from "./Images/pics/fifth.jpg";
import pic6 from "./Images/pics/sixth.jpg";
import pic7 from "./Images/pics/seventh.jpg";

const PictureGrid = () => {
    return(
        <div className="Pictures">
            <div className="picture1"><img className="picture1" src={pic1}/></div>
            <div className="picture3"><img className="picture3" src={pic2}/></div>
            <div className="picture2"><img className="picture2" src={pic3}/></div>
            <div className="picture1 "><img className="picture1" src={pic4}/></div>
            <div className="picture4 "><img className="picture4" src={pic5}/></div>
            <div className="picture2"><img className="picture2" src={pic6}/></div>
            <div className="picture4"><img className="picture4" src={pic7}/></div>
        </div>
    );
}

export default PictureGrid;