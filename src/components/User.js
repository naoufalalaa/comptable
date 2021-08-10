import React, { useEffect,useState } from "react";
import axios from "axios";
import Info from './InfoUser'
import unavailable from '../assets/img/unavailable-user.png'
import user from '../assets/img/user.png'
function Data({ person }) {
    const pe = person
    
    
    const prenom = pe.prenom;
    if(typeof(person.nom)==="undefined" ) {
      return (
        <div align="center">
            <h3>
              Utilisateur introuvable
            </h3>
            <img src={unavailable} alt="unavailable" width="200px"/>
        </div>
      );
    }
    function isValid(e){
      if(e){
        if(e==="en cours")return (<span style={{color : "#ffb700"}}>Attente</span>)
        if(e==="valide")return (<span style={{color : "#00b01a"}}>Valide</span>)
      }else return (<span>Not yet</span>)
    }
    function isEmpty(e){
      if(e){
        return (<span style={{color : "red"}}>{e}</span>)
      }else return (<span>Not yet</span>)
    }
    return (
    <div align="center">
        <h3>
          <strong>User Profile</strong>
        </h3>
        <div className="uk-grid uk-text-center" data-uk-grid>
            <div className="uk-width-1-3@s">
                <div className="uk-card uk-card-default uk-card-body">
                  <div className="uk-text-center">
                    <img src={user} alt={prenom+' '+pe.nom} width="100px"/>
                    <h4><strong>{prenom+' '+pe.nom}</strong></h4>
                  </div>
                  <div className="uk-text-left">
                    <Info/>
                    <div>
                      <div className="uk-grid-small" data-uk-grid>
                        <div className="uk-width-expand" data-uk-leader="fill: ">Entreprise :</div>
                        <div>{isEmpty(pe.nomE)}</div>
                      </div>
                      <div className="uk-grid-small" data-uk-grid>
                          <div className="uk-width-expand" data-uk-leader="fill: ">Validité :</div>
                          <div>{isValid(pe.validationComptable)}</div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
           
            <div className="uk-width-2-3@s">
                <div className="uk-card uk-card-default uk-card-body">Item</div>
            </div>
        </div>
    </div>
  );
}
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
function Profile() {
  const [person, setProfile] = useState({});

  

  function isLogged() {
    if (getCookie("sessionID") && getCookie("sessionT")) {
      if (
        getCookie("sessionID") !== "undefined" &&
        getCookie("sessionT") !== "undefined"
      )
        return 1;
      else {
        document.cookie =
          "sessionID= ; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie =
          "sessionT= ; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        return 0;
      }
    } else {
      return 0;
    }
  }
  const id = window.location.pathname.split('/')[3];
  useEffect(() => {
    document.title = "Comptable — Profile";
    document.getElementById("about").classList.remove("uk-active");
    document.getElementById("home").classList.remove("uk-active");
    (async () => {
      let dd = await axios.get(
        "https://comptableapi.herokuapp.com/users/ent/" + id
      );
      dd = dd.data;
      setProfile(dd);
    })();
  }, [id]);

  if (isLogged() && id) {
    return (
      <div align="center" className="uk-padding">
        <Data person={person} />
      </div>
    );
  } else window.location.replace("/");
}

export default Profile;