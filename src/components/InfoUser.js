import React, { useEffect,useState } from "react";
import axios from "axios";

function Data({ person }) {
    const pe = person
    
    
    const prenom = pe.prenom;
    function isAdmin(pe){
        if(pe==="admin"){
            return (<div align="center" style={{color:'yellow'}}>ADMINISTRATOR</div>)
        }
    }
    
    return (
    
        <div className="uk-padding-remove uk-text-left">
            {isAdmin(pe.role)}
            email : <span style={{color : "red"}}>{pe.email}</span><br/>
            Nom : <span style={{color : "red"}}>{pe.nom}</span><br/>
            Prénom : <span style={{color : "red"}}>{prenom}</span>
        </div>
  );
}

function Profile() {
  const [person, setProfile] = useState({});

  
  const id = window.location.pathname.split('/')[3];
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
  }, [id]);

    return (
      <div align="center" className="uk-padding">
        <Data person={person} />
      </div>
    );

}

export default Profile;