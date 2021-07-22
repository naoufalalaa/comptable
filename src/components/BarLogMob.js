import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class BarLog extends Component {
    
    render() {
        function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for(var i = 0; i <ca.length; i++) {
              var c = ca[i];
              while (c.charAt(0) === ' ') {
                c = c.substring(1);
              }
              if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
              }
            }
            return false;
          }
        function isLogged(){
            if(getCookie("session")){
                return 1
            }else{
                return 0
            }
        }
        function logout(){
            document.cookie = "session= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
            window.location.replace('/')
        }
        
        function UserLogged(props){

            return (
                <ul className="uk-navbar-nav" id="loginSM">
                    <li>
                        <a data-uk-toggle="target: #offcanvas-nav">{props.name}<span data-uk-icon="icon: chevron-down;"></span></a>
                        <div className="uk-navbar-dropdown">
                            <ul className="uk-nav uk-navbar-dropdown-nav">
                                <li><Link to="/Profile">Profile</Link></li>
                                <li><Link onClick={logout}>Logout</Link></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            )
        }
        function Guest(){
            return (
                <ul className="uk-navbar-nav" id="loginSM">
                    <Link to="/login"><button className="uk-button uk-button-primary butt uk-margin-right">login</button></Link>
                    <Link to="/sign"><button className="uk-button uk-light uk-button-default uk-margin-right">sign in</button></Link>
                </ul>
            )
        }
        
        if (isLogged()) {
            return <UserLogged name="Naoufal"/>;
          }
          return <Guest />;
        
    }
}

export default BarLog