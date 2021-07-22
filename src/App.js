import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import React  from 'react';
import Navbar from './components/Navbar'
import Home from './Home'
import About from './About'
import Login from './Login'
import Sign from './Sign'
import Footer from './components/Footer'
function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/about" component={About} />
        <Route  path="/login" component={Login} />
        <Route  path="/sign" component={Sign} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
