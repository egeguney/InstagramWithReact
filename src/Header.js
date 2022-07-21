import Settings from './Images/HomeFeed/Setting.png'
import Logo from './Images/HomeFeed/logo.png'
import Messages from './Images/HomeFeed/messages.png'


const Header = () => {

    return(
        <div className="header">
            <div className="settings">
                <img src={Settings}/>
            </div>
            <div className="instagram">
                <img src={Logo}/>
            </div>
            <div className="messages">
                <img src={Messages}/>
            </div>
        </div>
    );
}

export default Header;