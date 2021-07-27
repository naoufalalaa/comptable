import React, { useEffect }  from 'react';
import Signin from './Signin'
function Sign() {
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
    useEffect( () => {
        document.title = 'Comptable — Sign UP'
        document.getElementById('about').classList.remove('uk-active')
        document.getElementById('home').classList.remove('uk-active')
      })
      function isLogged(){
        if(getCookie("sessionID") && getCookie("sessionT")){
            return 1
        }else{
            return 0
        }
      }
      if(!isLogged()){
        return (
        <Signin/>
        );
      }else window.location.replace('/Profile')
}

export default Sign;
