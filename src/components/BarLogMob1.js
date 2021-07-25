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
                <ul>
                    <li className="uk-margin"><Link to="/Profile">{props.name}</Link></li>
                    <li><Link onClick={logout}>Logout</Link></li>
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
            return <UserLogged name="Naoufal"/>;
          }
          return <Guest />;
        
    }
}

export default BarLog