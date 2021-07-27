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
            if(getCookie("sessionID") && getCookie("sessionT")){
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
                    <li><Link to="/Profile">Profile</Link></li>
                    <li><a onClick={logout}>Logout</a></li>
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
            return <UserLogged />;
          }
          return <Guest />;
        
    }
}

export default BarLog