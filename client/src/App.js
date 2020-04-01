import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import Homepage from './pages/Homepage';
import WorkoutDashboard from './pages/WorkoutDashboard';
import DoYourOwn from './pages/DoYourOwn';
import ChallengePage from './pages/ChallengePage';
import NavBar from './components/NavBar/NavBar'

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/homepage" component={Homepage} />
        <Route exact path="/wokoutdashboard" component={WorkoutDashboard} />
        <Route exact path="/doyourown" component={DoYourOwn} />
        <Route exact path="/challenge" component={ChallengePage} />
      </Switch>
      <NavBar />
    </Router>

  );
}

export default App;
