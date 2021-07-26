import React, { useEffect }  from 'react';
function Profile() {
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
        document.title = 'Comptable — Login'
        document.getElementById('about').classList.remove('uk-active')
        document.getElementById('home').classList.remove('uk-active')
        document.getElementById('welcome').innerHTML="<h1>Connectez-vous</h1><p>Resez en contact avec votre conseillé et votre équipe comptable.</p>"
    })
    
    function isLogged(){
        if(getCookie("session")){
            return 1
        }else{
            return 0
        }
    }
    if(isLogged()){
        return (
            <div align="center">
                <h3>Welcome {getCookie("session").split('-')[0]}</h3>
            </div>
        )
    }
    else window.location.replace("/"); 
}

export default Profile;
