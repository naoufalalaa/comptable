import React, { useEffect,useState } from "react";
import axios from "axios";
import Info from './InfoUser'
import unavailable from '../assets/img/unavailable-user.png'
import user from '../assets/img/user.png'
function Data({ person ,loading }) {
  if(loading){
    return (
      <div align="center">
        <h3>
          <strong>User Profile</strong>
        </h3>
        <div id="msg"></div>
        <div className="uk-grid uk-text-center" data-uk-grid>
            <div className="uk-width-1-3@s">
                <div className="uk-card uk-card-default uk-card-body">
                  <div className="uk-text-center">
                    <img src={user} alt='right' width="100px"/>
                    <h4><strong>load</strong></h4>
                  </div>
                  <div className="uk-text-left">
                    Loading...
                    <div>
                      <div className="uk-grid-small" data-uk-grid>
                        <div className="uk-width-expand" data-uk-leader="fill: ">Entreprise :</div>
                        <div>load</div>
                      </div>
                      <div className="uk-grid-small" data-uk-grid>
                          <div className="uk-width-expand" data-uk-leader="fill: ">Validité :</div>
                          <div>load</div>
                      </div>
                    </div>
                    <div>
                        <button className="uk-button uk-button-light" disabled>Validate</button>
                    </div>
                  </div>
                </div>
            </div>
           
            <div className="uk-width-2-3@s">
                <div className="uk-card uk-card-default uk-card-body">Item</div>
            </div>
        </div>
    </div>
    )
  }
    const pe = person
    
    const userId = window.location.pathname.split('/')[3];
    
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
    function Validate(){
      function validat(){
        document.getElementById('msg').innerHTML="<div class='uk-alert' uk-alert><a class='uk-alert-close' data-uk-close></a><p><div data-uk-spinner></div> Chargement ...</p></div>"
        document.getElementById('i').setAttribute('disabled',true)
        document.getElementById('i').classList.remove('uk-button-success')

        let body = {}
        body.id= getCookie("sessionID")
        body.token= getCookie("sessionT")
        body.idAV = userId
        console.log(body)
        try{
        axios.post('https://comptableapi.herokuapp.com/users/valide',body)
        .then((response)=>{
          console.log(response)
          document.getElementById('msg').innerHTML="<div class='uk-alert-success' uk-alert><a class='uk-alert-close' data-uk-close></a><p>L'entreprise a été validé.</p></div>"
        })
        .catch((err)=>{ 
          console.log(err)
          document.getElementById('msg').innerHTML="<div class='uk-alert-danger' uk-alert><a class='uk-alert-close' data-uk-close></a><p>Erreur.</p></div>"
          document.getElementById('i').classList.add('uk-button-success')
        })}catch(err){
          console.log(err)
        }
      }
      if(pe.validationComptable ==='en cours'){
        return (<button onClick={validat} id='i' className="uk-button uk-button-success">Validate</button>)
      }
      else return (<button className="uk-button" disabled>Validate</button>)
    }
    return (
    <div align="center">
        <h3>
          <strong>User Profile</strong>
        </h3>
        <div id="msg"></div>
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
                    <div>
                      <Validate/>
                    </div>
                  </div>
                </div>
            </div>
           
            <div className="uk-width-2-3@s">
                <div className="uk-card uk-card-default uk-card-body">
                  <div className="uk-flex-center uk-child-width-1-2@s uk-child-width-1-3@m uk-text-center" data-uk-grid>
                      
                      <div>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src="images/light.jpg" alt="tesr"/>
                            </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">Media Top</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                      </div>

                      <div>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src="images/light.jpg" alt="tesr"/>
                            </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">Media Top</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src="images/light.jpg" alt="tesr"/>
                            </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">Media Top</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src="images/light.jpg" alt="tesr"/>
                            </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">Media Top</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src="images/light.jpg" alt="tesr"/>
                            </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">Media Top</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src="images/light.jpg" alt="tesr"/>
                            </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">Media Top</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src="images/light.jpg" alt="tesr"/>
                            </div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">Media Top</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                      </div>
                      
                  </div>
                </div>
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
  const [loading , setLoading] = useState(false)
  

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
      setLoading(true)
      const data = await axios.get(
        "https://comptableapi.herokuapp.com/users/ent/" + id
      ); 
      setProfile(data.data);
      setLoading(false)
    })();
  }, [id]);

  if (isLogged() && id) {
    return (
      <div align="center" className="uk-padding">
        <Data person={person} loading = {loading}/>
      </div>
    );
  } else window.location.replace("/");
}

export default Profile;