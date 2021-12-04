import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import './App.css';
import NavMenu from './Components/NavMenu';
import SingleUserForm from './Components/SingleUserForm';
import MultiUserForm from './Components/MultiUserForm';
import Game from './Components/Game';

function App() {
  return (
    <Router>
      <div className="App">
        <NavMenu />

        <Switch>

          {/* <Route path="/SinglePlayer">
            <SingleUserForm />
          </Route> */}
          <Route path="/SinglePlayer" component={SingleUserForm} />

          <Route path="/Multiplayer" component={MultiUserForm} />
          {/* <MultiUserForm />
          </Route> */}

          <Route path="/Game" component={Game} />
          {/* <Game />
          </Route> */}

        </Switch>
      </div>
    </Router>
  );
}

export default App;
