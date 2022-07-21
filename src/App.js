import NavBar from './Navbar';
import './App.css';
//import Home from './Home';
import { BrowserRouter as Router, ROute, Switch} from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="App">
          <NavBar />
        </div>
      </Router>
  );
}

export default App;
