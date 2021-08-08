import React, { Component } from "react";
import axios from "axios";
import Delete from "./delete";
export class Profile extends Component{
    constructor(props) {
        super(props)
        
        this.id = document.cookie.slice(document.cookie.indexOf('sessionID=')+10).split(';')[0]
        this.token = document.cookie.slice(document.cookie.indexOf('sessionT=')+9).split(';')[0]
        this.state = {
            id : this.id,
            token : this.token,
            nom: '',
            prenom: '',
            email: '',
            phone: '',
            bDate: '',
            role: 'user'
        }
      }

      
    
      changeHandler = e => {
        this.setState({[e.target.name] : e.target.value})
      }
    
      handleSubmit = e =>{
        e.preventDefault()
        document.getElementById('msg').innerHTML="<div class='uk-alert' uk-alert><a class='uk-alert-close' uk-close></a><p><div uk-spinner></div> Traitement ...</p></div>"
        document.getElementById('submit').setAttribute('disabled',true)
        
        axios.put('https://comptableapi.herokuapp.com/users/update',this.state)
        .then(response => {
            document.getElementById('msg').innerHTML="<div class='uk-alert-success' uk-alert><a class='uk-alert-close' uk-close></a><p>L'utilisateur "+response.data.email+" a été modifé.</p></div>"
            document.getElementById('submit').removeAttribute('disabled')
        })
        .catch(err=>{console.log(err)
            document.getElementById('msg').innerHTML="<div class='uk-alert-danger' uk-alert><a class='uk-alert-close' uk-close></a><p>Erreur, l'utilisateur n'a pas été modifié.</p></div>"
            document.getElementById('submit').removeAttribute('disabled')
        })
        
      }
render() {
    const {nom,prenom,email,phone, bDate, } = this.state
    
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
            Modify User
            </h3>
            <div id='msg'></div>
            <div align="center">
                <form align="center" className="uk-padding  uk-grid-small" data-uk-grid onSubmit={this.handleSubmit}>
                    
                    <div className="uk-width-1-2@s"> 
                        <input name="prenom" className="uk-input" type="text" onChange={this.changeHandler} value={prenom} required placeholder="Your new Name" />
                    </div>
                    
                    <div className="uk-width-1-2@s"> 
                        <input name="nom" className="uk-input" type="text" onChange={this.changeHandler} value={nom} required placeholder="Your new Last Name" />
                    </div>

                    <div className="uk-width-1-2@s"> 
                        <input name="email" className="uk-input" type="email" onChange={this.changeHandler} value={email} required placeholder="E-mail address" />
                    </div>

                    <div className="uk-width-1-2@s"> 
                        <input name="phone" className="uk-input" type="text" onChange={this.changeHandler} value={phone} required placeholder="Phone number" />
                    </div>
                    
                    <div className="uk-width-1-2@s"> 
                        <input name="bDate" className="uk-input" type="date" onChange={this.changeHandler} value={bDate} required placeholder="Birthdate" />
                    </div>
                    
                    
                    <div className="uk-grid uk-width-1-1" data-uk-grid>
                        <div className="uk-width-1-2@s">
                            <button type="submit" id='submit' className="uk-button uk-button-secondary">Modify user</button>
                        </div>
                        <div className="uk-width-1-2@s">
                            <button type="button" className="uk-button uk-button-danger" data-uk-toggle="target: #delete">Delete user</button>
                        </div>
                    </div>

                    <Delete/>
                </form>
            </div>
        </div>
        );
    } else window.location.replace("/");
    }
}
export default Profile;