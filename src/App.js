import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import React  from 'react';
import Navbar from './components/Navbar'
import Home from './Home'
import About from './About'
import Login from './Login'
import Sign from './Sign'
import Profile from './Profile'
import User from './User'
import Ent from './Entreprise'
import Upd from './allUpdate'
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
        <Route  path="/Profile" component={Profile} />
        <Route  exact path="/User" component={User} />
        <Route  path="/User/update" component={Upd} />
        <Route  path="/Entreprise" component={Ent} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
