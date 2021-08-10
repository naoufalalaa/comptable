import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import React  from 'react';
import Navbar from './components/Navbar'
import Home from './Home'
import About from './About'
import Login from './Login'
import Sign from './Sign'
import Profile from './Profile'
import ProfileA from './ProfileAdmin'
import Admin from './Admin'
import User from './User'
import UserId from './components/User'
import Ent from './Entreprise'
import Upd from './allUpdate'
import Footer from './components/Footer'
function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route exact path="/admin" component={Admin} />
        <Route path="/admin/profile" component={ProfileA} />
        <Route path="/admin/user/:id" component={UserId} />
        <Route path="/sign" component={Sign} />
        <Route path="/Profile" component={Profile} />
        <Route exact path="/User" component={User} />
        <Route path="/User/update" component={Upd} />
        <Route path="/Entreprise" component={Ent} />
        <Route path='*' exact={true} component={Home} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
