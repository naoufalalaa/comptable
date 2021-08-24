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
        document.getElementById('msg').innerHTML="<div class='uk-alert-' uk-alert><a class='uk-alert-close' uk-close></a><p><div uk-spinner></div> Loading...</p></div>"
        document.getElementById('del').setAttribute('disabled',true)
        
        try{
            axios.post('https://comptableapi.herokuapp.com/users/delete',this.state)
            .then(response => {
                if(response.data==="authentification error") {
                    document.getElementById('del').removeAttribute('disabled')
                    document.getElementById('msg').innerHTML="<div class='uk-alert-danger' uk-alert><a class='uk-alert-close' uk-close></a><p>Erreur, l'utilisateur n'a pas été supprimé.</p></div>"
                }else{
                    document.cookie =
                    "sessionID= ; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                    document.cookie =
                    "none= ; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                    document.cookie =
                    "sessionT= ; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                }
                window.location.replace('/login')
            })
            .catch(err=>{console.log(err)
                document.getElementById('del').removeAttribute('disabled')
                document.getElementById('msg').innerHTML="<div class='uk-alert-danger' uk-alert><a class='uk-alert-close' uk-close></a><p>Erreur, du serveur.</p></div>"
            })
        } catch(err){
            document.getElementById('del').removeAttribute('disabled')
            document.getElementById('msg').innerHTML="<div class='uk-alert-danger' uk-alert><a class='uk-alert-close' data-uk-close></a><p>Erreur du serveur.</p></div>"
            console.log(err)
        }
      }
render() {
    const {email} = this.state
    

        return (   
        <div>
            <h2 className="uk-modal-title">Delete account</h2>
            <p>You deleting your account will be definitive. Make your mind before making this decision.</p>
            <p>Do you still want to delete this account?</p>
            <form onSubmit={this.handleSubmit}>
                <input className="uk-input" type="email" name="email" onChange={this.changeHandler} value={email} placeholder="Confirm with re-entring your email address" />
                <p className="uk-text-right">
                <button id="del" className="uk-button uk-button-danger" type="submit">Yes, delete it</button>
                </p>                
            </form>
        </div>
        );
    }
}
export default Profile;