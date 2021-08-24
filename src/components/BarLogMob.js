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
            document.cookie = "sessionID= ; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
            document.cookie = "none= ; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
            document.cookie = "sessionT= ; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
            window.location.replace('/login')
        }
        
        function UserLogged(props){
            if(getCookie("none")){
                return (
                    <ul className="uk-navbar-nav" id="loginSM">
                        <li><Link to="/admin/profile">Admin Panel</Link></li>
                        <li><Link to="/Profile">Profile</Link></li>
                        <li><Link to="" onClick={logout}>Logout</Link></li>
                    </ul>
                )
            }
            return (
                <ul className="uk-navbar-nav" id="loginSM">
                    <li><Link to="/Profile">Profile</Link></li>
                    <li><Link to="" onClick={logout}>Logout</Link></li>
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