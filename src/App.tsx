import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import styles from './App.module.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Code from './pages/Code';
import Index from './pages/Resume';

const App: React.FC = () => {
  return (
    <div className={styles.App} data-testid="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/code">
            <Code/>
          </Route>
          <Route path="/resume">
            <Index/>
          </Route>
          <Route path="*">
            <Redirect to="/home"/>
          </Route>
        </Switch>
      </Router>
      <footer>
        <p>Copyright © 2014-2020 Gregory Jackson</p>
      </footer>
    </div>
  );
};

export default App;
