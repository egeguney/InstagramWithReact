import './HomeStyle.css';
import Stories from './Stories';
import Posts from './Posts';
import Header from './Header'

const Home = () => {
    return(
        <div className="home">
            <Header />
            <Stories />
            <Posts />
        </div>
    );
}

export default Home;