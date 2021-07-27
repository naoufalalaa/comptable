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
        document.title = 'Comptable — Profile'
        document.getElementById('about').classList.remove('uk-active')
        document.getElementById('home').classList.remove('uk-active')
    })
    
    function isLogged(){
        if(getCookie("sessionID") && getCookie("sessionT")){
            if(getCookie("sessionID")!=='undefined' && getCookie("sessionT")!=='undefined')
                return 1
            else{
                document.cookie = "sessionID= ; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
                document.cookie = "sessionT= ; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
                return 0
            }
        }else{
            return 0
        }
    }

    
    function Data(){
        const _data = {
            "entreprise": "Boukhchba", 
            "statut": "ok"
        }
        return (<pre className="uk-width-1-2@s">
                <em>entreprise :</em> {_data.entreprise}<br/> <em>statut :</em> {_data.statut}
            </pre>)
    }
    
    if(isLogged()){
        return (
            <div align="center" className="uk-padding">
                <h3>Welcome <strong>{getCookie("sessionID")}</strong></h3>
                <Data/>
            </div>
        )
    }
    else window.location.replace("/"); 
}

export default Profile;
