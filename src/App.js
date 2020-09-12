import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import SignUp1 from './components/SignUp1/SignUp1';
import { AuthContexProvider } from './components/Login/useAuth';

function App() {
  return (
    <div className="App">
      <AuthContexProvider>
      <Header></Header>
        <Router>
           <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/About">
              <About />
              <Route path="/SignUp1">
                <SignUp1></SignUp1>
              </Route>

            </Route>
            <Route path="/Signup"><Signup /></Route>
            <Route path="/Login"><Login /></Route>
          </Switch>
        </Router>
      </AuthContexProvider>
    </div>
  );
}

export default App;
