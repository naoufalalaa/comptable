import React, { Component } from "react";
import axios from "axios";
export class Profile extends Component{
    constructor(props) {
        super(props)

        this.state = {
            nomE: '',
            typeE: '',
            capital: '',
            sectActi: '',
            nbrAssocies: '',
            listGerant: ''
        }
      }
    
      changeHandler = e => {
        this.setState({[e.target.name] : e.target.value})
      }
    
      handleSubmit = e =>{
        e.preventDefault()
        
        axios.post('https://comptableapi.herokuapp.com/users/ent',this.state)
        .then(response => {
            document.getElementById('msg').innerHTML="<div class='uk-alert-success' uk-alert><a class='uk-alert-close' uk-close></a><p>L'entreprise "+response.data.nomE+" a été modifée.</p></div>"
        })
        .catch(err=>{console.log(err)
            document.getElementById('msg').innerHTML="<div class='uk-alert-danger' uk-alert><a class='uk-alert-close' uk-close></a><p>Erreur, l'entreprise n'a pas été modifiée.</p></div>"
        })
        
      }
render() {
    const {nomE , typeE , capital , sectActi, nbrAssocies , listGerant} = this.state

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
    
    if (isLogged()) {
        return (
        <div align="center" className="uk-padding">
            <h3>
            Modify
            </h3>
            <div align="center">
                <form align="center" className="uk-padding  uk-grid-small" data-uk-grid onSubmit={this.handleSubmit}>
                    
                    <div className="uk-width-1-2@s"> 
                        <input name="nomE" className="uk-input" type="text" onChange={this.changeHandler} value={nomE} required placeholder="Nom Entreprise" id='nomE' />
                    </div>
                    <div className="uk-width-1-2@s"> 
                        <select name="typeE" onChange={this.changeHandler} value={typeE} required class="uk-select">
                            <option value="Entreprise individuelle (EI)">Entreprise individuelle (EI)</option>
                            <option value="Entreprise individuelle à responsabilité limitée (EIRL)">Entreprise individuelle à responsabilité limitée (EIRL)</option>
                            <option value="Entreprise unipersonnelle à responsabilité limitée (EURL)">Entreprise unipersonnelle à responsabilité limitée (EURL)</option>
                            <option value="Société à responsabilité limitée (SARL)">Société à responsabilité limitée (SARL)</option>
                            <option value="Société anonyme (SA)">Société anonyme (SA)</option>
                            <option value="Société par actions simplifiée (SAS) / (unipersonnelle (SASU))">Société par actions simplifiée (SAS) / (unipersonnelle (SASU))</option>
                            <option value="Société en nom collectif (SNC)">Société en nom collectif (SNC)</option>
                            <option value="La société coopérative de production (SCOP)">La société coopérative de production (SCOP)</option>
                            <option value="Société en commandite par actions (SCA)">Société en commandite par actions (SCA)</option>
                            <option value="Société en commandite simple (SCS)">Société en commandite simple (SCS)</option>
                        </select>
                    </div>
                    <div className="uk-width-1-2@s"> 
                        <input name="capital" className="uk-input" type="text" onChange={this.changeHandler} value={capital} required placeholder="Capital de l'entreprise" />
                    </div>
                    <div className="uk-width-1-2@s">    
                    <input name="sectActi" className="uk-input" type="text" onChange={this.changeHandler} value={sectActi} required placeholder="Secteur d'activité" />
                    </div>
                    <div className="uk-width-1-2@s">
                    <input name="nbrAssocies" className="uk-input" type="number" onChange={this.changeHandler} value={nbrAssocies} required placeholder="Nombre d'Associés" />
                    </div>
                    <div className="uk-width-1-2@s">
                    <input name="listGerant" className="uk-input" type="text" onChange={this.changeHandler} value={listGerant} required placeholder="Les gérants séparés par ;" />
                    </div>
                
                    <div className="uk-width-1-1@s">
                    <button type="submit" id='submit' className="uk-margin uk-button uk-button-secondary">Modify</button>
                    </div>
                </form>
            </div>
        </div>
        );
    } else window.location.replace("/");
    }
}
export default Profile;