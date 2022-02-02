import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import IndexPage from './IndexPage';
import Navbar from "./navbar";
import SongDetails from "./SongDetails";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <IndexPage />
            </Route>
            <Route exact path="/songs">
              <SongDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
