import React, { useEffect }  from 'react';
import axios from 'axios'

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


    
    
    function isLogged(){
        if(getCookie("sessionID") && getCookie("sessionT")){
            if( getCookie("sessionID")!=='undefined' && getCookie("sessionT")!=='undefined' )
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

    async function getData() {
        return await axios.get('https://comptableapi.herokuapp.com/clients/'+id)
        .then(response => {
            const data = response.data
            const dt = "<em>phone :</em> <span id='phone'>"+data.phone+"</span> <br/> <em>email :</em> <span id='email'>"+data.email+"</span> <br/> <em>role :</em> <span id='role'>"+data.role+"</span>"
            document.getElementById('infos').innerHTML=dt
            document.getElementById('username').innerText = data.email.split('@')[0]
            return data
        })
        .catch(err=>console.log(err))
    }

    const id = getCookie("sessionID")
     function Data(){ 
        
        useEffect( () => {
            document.title = 'Comptable — Profile'
            document.getElementById('about').classList.remove('uk-active')
            document.getElementById('home').classList.remove('uk-active')
        })
        getData()
        return(
            <div align="center">
                <pre className="uk-width-1-2@s" id="infos">
                    <div data-uk-spinner></div>
                </pre>
                <div className="uk-grid uk-width-1-2@m uk-child-width-1-2@m" data-uk-grid>
                    <div>
                        <button className="uk-button uk-button-secondary"><span data-uk-icon="settings"></span> User</button>
                    </div>
                    <div>
                    <button className="uk-button uk-button-light"><span data-uk-icon="plus-circle"></span> Entreprise</button>
                    </div>
                </div>
            </div>
        )
    }
    
    if(isLogged()){

        return (
            <div align="center" className="uk-padding">
                <h3>Welcome <strong id="username"></strong></h3>
                <Data/>
            </div>
        )
    }
    else window.location.replace("/"); 
}

export default Profile;
