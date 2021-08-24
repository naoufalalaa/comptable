import React from 'react'
import Delete from './delete' 
export default function DeleteU() {
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(";");
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) === " ") {
            c = c.substring(1);
          }
          if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
          }
        }
        return false;
      }
      if(getCookie("sessionID") && getCookie('sessionT')){
        return (
            <div className="uk-margin uk-padding">
                <div id="msg"></div>
                <Delete/>
            </div>
        )
      } else{
          window.location.replace('/login')
      }
}
