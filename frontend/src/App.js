import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import './App.css';
import NavMenu from './Components/NavMenu';
import SingleUserForm from './Components/SingleUserForm';
import MultiUserForm from './Components/MultiUserForm';
import Game from './Components/Game';
import SingleUserFormLS from './Components/SingleUserFormLS';
import MultiUserFormLS from './Components/MultiUserFormLS';

function App() {
  return (
    <Router>
      <div className="App">
        <NavMenu />

        <Switch>
          <Route path="/SinglePlayer" component={SingleUserForm} />
          <Route path="/SinglePlayerLS" component={SingleUserFormLS} />
          <Route path="/Multiplayer" component={MultiUserForm} />
          <Route path="/MultiplayerLS" component={MultiUserFormLS} />
          <Route path="/Game" component={Game} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
