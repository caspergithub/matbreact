import React from 'react';
import './app.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Frontpage from './components/frontpage/Frontpage';
import Topnav from './components/topnav/Topnav';
import Footer from './components/footer/Footer';
import Matblinks from './components/matblinks/Matblinks';
import Matbexamples from './components/matbexamples/Matbexamples';

function App() {
  return (
    <Router>
      <Topnav></Topnav>
      <Switch>
        <Route path="/matbexamples">
          <Matbexamples></Matbexamples>
        </Route>
        <Route path="/matblinks">
          <Matblinks></Matblinks>
        </Route>
        <Route path="/">
          <Frontpage></Frontpage>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
