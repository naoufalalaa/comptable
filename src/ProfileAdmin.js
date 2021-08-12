import React, { useEffect,useState } from "react";
import axios from "axios";
import Users from "./components/Users";
import {Link} from 'react-router-dom'
function Data({ person }) {
    const pe = person
    function AddEnt(){
      if(person.nom === null || person.nom ==='' || typeof(person.nom) === "undefined") return(
        <div id="Ent">
              <Link to="/Entreprise">
                    <button className="uk-button uk-width-1-1 uk-button-light uk-dark">
                        <span data-uk-icon="plus-circle"></span> Entreprise
                    </button>
                </Link>
          </div>
      )
      else return null
    }
    
    const prenom = pe.prenom;
    
    return (
    <div align="center">
        <h3>
          Welcome Administrator <strong>{prenom+' '+pe.nom} </strong>
        </h3>
      <div className="uk-table-div">
      <table className="uk-table uk-table-striped">
        <thead>
            <tr>
                <th>User</th>
                <th>Entreprise</th>
                {/* <th>Certificat négatif</th>
                <th>Domiciliation</th>
                <th>Statut et Cachet</th>
                <th>Enregistrement des statuts</th>
                <th>Demande de patente</th>
                <th>Demande de RC</th>
                <th>Demande IF</th>
                <th>Les Annonces</th>
                <th>Affiliation CNSS</th> */}
                <th>User Infos</th>
            </tr>
        </thead>
        <Users/>
      </table>
      </div>
      <div className="uk-grid" data-uk-grid>
        <div>
            <Link to="/User">
                <button className="uk-button uk-width-1-1 uk-button-secondary">
                    <span data-uk-icon="settings"></span> User password
                </button>
            </Link>
        </div>
        <AddEnt/>
      </div>
    </div>
  );
}

function Profile() {
  const [person, setProfile] = useState({});

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
  const id = getCookie("sessionID");
  useEffect(() => {
    document.title = "Comptable — Admin";
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

  if (isLogged()) {
    return (
      <div align="center" className="uk-padding">
        <Data person={person} />
      </div>
    );
  } else window.location.replace("/");
}

export default Profile;