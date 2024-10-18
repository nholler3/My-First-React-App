import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Tweets from './components/Tweets';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Tweets" element={<Tweets />}/>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
