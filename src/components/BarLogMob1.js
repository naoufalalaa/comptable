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
        
        function UserLogged(){
            if(getCookie("none")){
                return (
                    <ul>
                        <li className="uk-margin"><Link to="/admin/profile">Admin Panel</Link></li>
                        <li className="uk-margin"><Link to="/Profile">Profile</Link></li>
                        <li><Link to="" onClick={logout}>Logout</Link></li>
                    </ul>
                )
            }
            return (
                <ul>
                    <li className="uk-margin"><Link to="/Profile">Profile</Link></li>
                    <li><Link to="" onClick={logout}>Logout</Link></li>
                </ul>
            )
        }
        function Guest(){
            return (
                <ul>
                    <li className="uk-margin"><Link to="/login"><span uk-icon="icon: user;"></span> Login</Link></li>
                    <li><Link to="/sign"><span uk-icon="icon: sign-in;"></span> Sign in</Link></li>
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