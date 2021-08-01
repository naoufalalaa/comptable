import React, { Component, useEffect,useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
export class Profile extends Component{

render() {

function Data({ person }) {
    const pe = person

    function isEmpty(de){
        if(de===null || de==='' || typeof(de) === "undefined") return(<i>Not defined</i>)
        return (<strong>{de}</strong> )
    }
    if(pe.nomE===null || pe.nomE === '' || pe.nomE ==="undefined"){
        document.getElementById('donnee')
    }
    return (
    <div align="center">
        
      
    </div>
  );
}

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
    document.title = "Comptable — Entreprise";
    document.getElementById("about").classList.remove("uk-active");
    document.getElementById("home").classList.remove("uk-active");
    (async () => {
      let dd = await axios.get(
        "https://comptableapi.herokuapp.com/users/user/" + id
      );
      dd = dd.data;
      setProfile(dd);
    })();
  }, []);

  if (isLogged()) {
    return (
      <div align="center" className="uk-padding">
        <h3>
          Welcome <strong id="username"></strong>
        </h3>
        <Data person={person} />
      </div>
    );
  } else window.location.replace("/");
}
}
export default Profile;