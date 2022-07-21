import NavBar from './NavBar';
import './App.css';
import Home from './Home';
import Search from './Search';
import Profile from './Profile';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="content">
              <Routes>
                <Route exact path="/">
                      <Home />
                </Route>
                <Route path="/search">
                     <Search />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
              </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
