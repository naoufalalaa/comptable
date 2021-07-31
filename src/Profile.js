import React, { useEffect,useState } from "react";
import axios from "axios";

function Data({ person }) {
  return (
    <div align="center">
      <pre className="uk-width-1-2@s" id="infos">
        <p><em>id : </em><i>{person.id}</i></p>
        <p><em>email : </em><i>{person.email}</i></p>
        <p><em>created At : </em><i>{person.createdAt}</i></p>
        <p><em>Updated At : </em><i>{person.updatedAt}</i></p>
      </pre>
      <div className="uk-grid uk-width-1-2@m uk-child-width-1-2@s" data-uk-grid>
        <div>
          <button className="uk-button uk-width-1-1 uk-button-secondary">
            <span data-uk-icon="settings"></span> User
          </button>
        </div>
        <div>
          <button className="uk-button uk-width-1-1 uk-button-light">
            <span data-uk-icon="plus-circle"></span> Entreprise
          </button>
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
        "https://comptableapi.herokuapp.com/clients/" + id
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

export default Profile;