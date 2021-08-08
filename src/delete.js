import React, { Component } from "react";
import axios from "axios";
export class Profile extends Component{
    constructor(props) {
        super(props)
        
        this.id = document.cookie.slice(document.cookie.indexOf('sessionID=')+10).split(';')[0]
        this.token = document.cookie.slice(document.cookie.indexOf('sessionT=')+9).split(';')[0]
        this.state = {
            id : this.id,
            token : this.token,
            email: ''
        }
      }

      
    
      changeHandler = e => {
        this.setState({[e.target.name] : e.target.value})
      }
    
      handleSubmit = e =>{
        e.preventDefault()
        
        axios.put('https://comptableapi.herokuapp.com/users/delete',this.state)
        .then(response => {
            if(response.data==="authentification error") {
                document.getElementById('msg').innerHTML="<div class='uk-alert-danger' uk-alert><a class='uk-alert-close' uk-close></a><p>Erreur, l'utilisateur n'a pas été supprimé.</p></div>"
            }else{
                document.cookie =
                "sessionID= ; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                document.cookie =
                "sessionT= ; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            }
        })
        .catch(err=>{console.log(err)
            document.getElementById('msg').innerHTML="<div class='uk-alert-danger' uk-alert><a class='uk-alert-close' uk-close></a><p>Erreur, du serveur.</p></div>"
        })
        
      }
render() {
    const {email} = this.state
    
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
            <div id="delete" data-uk-modal>
                <div className="uk-modal-dialog uk-modal-body">
                    <h2 className="uk-modal-title">Delete account</h2>
                    <p>You deleting your account will be definitive. Make your mind before making this decision.</p>
                    <p>Do you still want to delete this account?</p>
                    <input className="uk-input" type="email" name="email" onChange={this.changeHandler} value={email} placeholder="Confirm with re-entring your email address" />
                    <p className="uk-text-right">
                        <button className="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                        <button className="uk-button uk-button-danger" type="submit">Yes, delete it</button>
                    </p>
                </div>
            </div>
        );
    } else window.location.replace("/");
    }
}
export default Profile;