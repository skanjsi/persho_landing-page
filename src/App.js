import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/styles.css';
import IndexPage from './pages/IndexPage';
import LandingPage1 from './pages/LandingPage1';
import LandingPage2 from './pages/LandingPage2';
import LandingPage3 from './pages/LandingPage3';
import LandingPage4 from './pages/LandingPage4';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={IndexPage} />
        <Route path='/LandingPage1' component={LandingPage1} />
        <Route path='/LandingPage2' component={LandingPage2} />
        <Route path='/LandingPage3' component={LandingPage3} />
        <Route path='/LandingPage4' component={LandingPage4} />
      </div>
    </Router>
  );
}

export default App;
