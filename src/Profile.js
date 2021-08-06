import React, { useEffect,useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
function Data({ person }) {
    const pe = person
    function isEmpty(de){
        if(de===null || de==='' || typeof(de) === "undefined") return(<i><Link className="uk-text-secondary" to="/Entreprise">Not yet defined  <span uk-icon="pencil"></span></Link></i>)
        return (<strong>{de}</strong> )
    }
    if(pe.nomE===null || pe.nomE === '' || pe.nomE ==="undefined"){
        document.getElementById('donnee')
    }
    const prenom = pe.prenom;
    
    return (
    <div align="center">
        <h3>
          Welcome <strong>{prenom+' '+pe.nom} </strong>
        </h3>
      <pre className="uk-width-1-2@s" id="infos">
        <p><em>email : </em><i>{pe.email}</i></p>
        <p><em>Profile created At : </em><i>{pe.createdAt}</i></p>
        <Link to = "/User/update">
            <button className="uk-button uk-simple uk-width-1-1 uk-button-secondary">
                <span data-uk-icon="cog"></span> User infos
            </button>
        </Link>
      </pre>
      <div className="uk-table-div">
      <table className="uk-table uk-table-striped">
        <thead>
            <tr>
                <th>Nom Entreprise</th>
                <th>Type Entreprise</th>
                <th>Capital</th>
                <th>nbr Associés</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><small>{isEmpty(pe.nomE)}</small></td>
                <td><small>{isEmpty(pe.typeE)}</small></td>
                <td><small>{isEmpty(pe.capital)}</small></td>
                <td><small>{isEmpty(pe.sectActi)}</small></td>
                <td><small>{isEmpty(pe.listAssocies)}</small></td>
                <td><small>{isEmpty(pe.listGerant)}</small></td>
            </tr>
        </tbody>
      </table>
      </div>
      <div id="donnee" className="uk-grid uk-width-1-2@m uk-child-width-1-2@s" data-uk-grid>
        <div>
            <Link to="/User">
                <button className="uk-button uk-width-1-1 uk-button-secondary">
                    <span data-uk-icon="settings"></span> User password
                </button>
            </Link>
        </div>
        <div id="Ent">
            <Link to="/Entreprise">
                <button className="uk-button uk-width-1-1 uk-button-light uk-dark">
                    <span data-uk-icon="plus-circle"></span> Entreprise
                </button>
            </Link>
        </div>
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
    document.title = "Comptable — Profile";
    document.getElementById("about").classList.remove("uk-active");
    document.getElementById("home").classList.remove("uk-active");
    (async () => {
      let dd = await axios.get(
        "https://comptableapi.herokuapp.com/users/user/" + id
      );
      dd = dd.data;
      setProfile(dd);
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLogged()) {
    return (
      <div align="center" className="uk-padding">
        
        <Data person={person} />
      </div>
    );
  } else window.location.replace("/");
}

export default Profile;