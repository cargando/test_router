import React from 'react';
import { HashRouter as Router } from 'react-router-dom'
import './App.css';
import {Nav} from './components';
import theRoutes from './routes';
// import Navi from './r'
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <Nav>
                {theRoutes}
            </Nav>
            {/*<Navi />*/}
        </Router>

      </header>
    </div>
  );
}

export default App;

