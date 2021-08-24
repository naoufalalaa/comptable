import React, { useEffect,useState } from "react";
import axios from "axios";

function Data({ person }) {
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
  const id=getCookie("sessionID")
  const token=getCookie("sessionT")
  const idAs=window.location.pathname.split('/')[3]

  function Delete(){
    function delet(){
      var body={
        id: id,
        idAS : idAs,
        token : token
      }
      document.getElementById('msg').innerHTML="<div class='uk-alert' uk-alert><a class='uk-alert-close' data-uk-close></a><p><div data-uk-spinner></div> Suppression ...</p></div>"
      try{
        axios.delete("https://comptableapi.herokuapp.com/users/delete/admin",body)
        .then(()=>{
          document.getElementById('msg').innerHTML="<div class='uk-alert-danger' uk-alert><a class='uk-alert-close' data-uk-close></a><p>L'entreprise a été supprimée.</p></div>"
          window.location.replace('/admin/profile')
        })
        .catch(err => {
          document.getElementById('msg').innerHTML="<div class='uk-alert-danger' uk-alert><a class='uk-alert-close' data-uk-close></a><p>L'entreprise n'a pas été supprimée.<br/>"+err+"</p></div>"
        })
      }catch(err){
        console.log(err)
      }
    }
    if(person.role==="user"){
      return (<button onClick={delet} className="uk-button uk-button-danger">Delete User</button>)
    }else{
      return (<button disabled className="uk-button uk-button-danger">Delete User</button>)
    }
  }
  return <Delete/>
    
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
        <Data person={person} />
    );

}

export default Profile;