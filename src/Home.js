import './style copy.css';
import Stories from './HomeContent/Stories';
import Posts from './HomeContent/Posts';
import Header from './HomeContent/Header'

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