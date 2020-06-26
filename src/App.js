import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import { Link,Switch, BrowserRouter as  Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
           </Route>
            
          <Route path="/About">
          <About/>
          </Route>
      
      </Switch>
 </Router>
     
    </div>
  );
}

export default App;
