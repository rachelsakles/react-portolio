import React from 'react'; 
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css'; 
import About from "./pages/About"; 
import Contact from "./pages/Contact"; 
import Portfolio from "./pages/Portfolio"; 
import Nav from "./components/nav/nav"; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return ( 
    <Router> 
      <Nav/>
      <div>
        <Switch> 
          <Route exact path='/' component={About}/> 
          <Route path='/portfolio' component={Portfolio}/> 
          <Route path='/contact' component={Contact}/>
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
