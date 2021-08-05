import React, { Component } from "react";
import axios from "axios";
export class Profile extends Component{
    constructor(props) {
        super(props)
        
        this.id = document.cookie.split(';')[1].split('=')[1]
        this.token = document.cookie.split(';')[0].split('=')[1]
        this.state = {
            id : this.id,
            token : this.token,
            email: '',
            oldpassword: '',
            newpassword: ''
        }
      }

      
    
      changeHandler = e => {
        this.setState({[e.target.name] : e.target.value})
      }
    
      handleSubmit = e =>{
        e.preventDefault()
        
        axios.put('https://comptableapi.herokuapp.com/users/changepass',this.state)
        .then(response => {
            document.getElementById('msg').innerHTML="<div class='uk-alert-success' uk-alert><a class='uk-alert-close' uk-close></a><p>L'utilisateur "+response.data.email+" a été modifé.</p></div>"
        })
        .catch(err=>{console.log(err)
            document.getElementById('msg').innerHTML="<div class='uk-alert-danger' uk-alert><a class='uk-alert-close' uk-close></a><p>Erreur, l'utilisateur n'a pas été modifié.</p></div>"
        })
        
      }
render() {
    const {email , oldpassword , newpassword } = this.state
    function isTheSame(){
        var pass=document.getElementById('newpassword')
        var pass1=document.getElementById('passwordConf')
        if(pass.value.length >= 8){
            if(pass.value===pass1.value){
            pass.classList.remove('uk-form-warning')
            pass1.classList.remove('uk-form-warning')
            pass.classList.add('uk-form-success')
            pass1.classList.add('uk-form-success')
            document.getElementById('error').innerText=""
            }else{
            pass.classList.remove('uk-form-success')
            pass1.classList.remove('uk-form-success')
            pass.classList.add('uk-form-warning')
            pass1.classList.add('uk-form-warning')
            document.getElementById('error').innerText="Using different passwords"
            document.getElementById('error').style.color="#ffb700"
            }
        }
    }
    function changState(){
      var pass = document.getElementById('newpassword')
      var pass1 = document.getElementById('passwordConf')
      
      if(pass.classList.contains("uk-form-success")){
        pass.classList.remove('uk-form-success')
        pass1.classList.remove('uk-form-success')
      }
      if(pass.classList.contains("uk-form-danger")){
        pass.classList.remove('uk-form-danger')
        pass1.classList.remove('uk-form-danger')
      }
      if(pass.value.length < 8){
        pass.classList.add('uk-form-danger')
        pass1.classList.add('uk-form-danger')
        document.getElementById('error').innerText="Password must be longer"
        document.getElementById('error').style.color="red"
      }else{
        pass.classList.remove('uk-form-danger')
        pass1.classList.remove('uk-form-danger')
        document.getElementById('error').innerText=""
      }
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
            Modify Password
            </h3>
            <div id='msg'></div>
            <div align="center">
                <form align="center" className="uk-padding  uk-grid-small" data-uk-grid onSubmit={this.handleSubmit}>
                    
                    <div className="uk-width-1-2@s"> 
                        <input name="email" className="uk-input" type="email" onChange={this.changeHandler} value={email} required placeholder="Re-enter you email address" />
                    </div>
                    
                    <div className="uk-width-1-2@s"> 
                        <input name="oldpassword" className="uk-input" type="password" onChange={this.changeHandler} value={oldpassword} required placeholder="Enter your old password" />
                    </div>
                    
                    <div className="uk-width-1-2@s"> 
                        <input name="newpassword" id="newpassword" className="uk-input" type="password" onChange={this.changeHandler} value={newpassword} onKeyUp={changState} required placeholder="Enter your new password" />
                    </div>
                    <div className="uk-width-1-2@s"> 
                        <input id="passwordConf" className="uk-input" type="password" onChange={isTheSame} required placeholder="RE-Enter your new password" />
                    </div>
                    <span id="error"></span>
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