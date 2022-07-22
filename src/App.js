import NavBar from './NavBar';
import './App.css';
import Home from './Home';
import Search from './Search';
import Profile from './Profile';
import NotYet from "./NotYet";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="App">

          <div className="content">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="*" element={<NotYet/>} />
              </Routes>
          </div>
            <NavBar />
        </div>
      </Router>
  );
}

export default App;
