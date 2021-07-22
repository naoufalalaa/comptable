import React, { useEffect }  from 'react';
function Login() {
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

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    useEffect( () => {
        document.title = 'Comptable — Login'
        document.getElementById('about').classList.remove('uk-active')
        document.getElementById('home').classList.remove('uk-active')
        document.getElementById('welcome').innerHTML="<h1>Connectez-vous</h1><p>Resez en contact avec votre conseillé et votre équipe comptable.</p>"
    })
    function login(){
        setCookie("session",document.getElementById('session').value,30)
        window.location.replace('/')
    }
    function isLogged(){
        if(getCookie("session")){
            return 1
        }else{
            return 0
        }
    }
    if(!isLogged()){
        return (
            <div>
                <input type="text" id="session" placeholder="Session" />
                <button onClick={login}>Connect</button>
            </div>
        )
    }
    else window.location.replace("/"); 
}

export default Login;
