import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import BuySell from './components/pages/BuySell';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/about' component={About} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/buy-sell' component={BuySell} />

      </Switch>
    </Router>
  );
}

export default App;