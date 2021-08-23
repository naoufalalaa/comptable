import React, { Component }  from 'react';
import axios  from 'axios';
export class Login extends Component  {
  constructor(props) {
    super(props)

    this.state = {
        email: '',
        password: ''
    }
  }

  changeHandler = e => {
    this.setState({[e.target.name] : e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    document.getElementById('submit').setAttribute('disabled',true)
    document.getElementById('msg').innerHTML=`<div class='uk-alert' uk-alert><div uk-spinner></div> LOADING</div>`
    try{
      axios.post('https://comptableapi.herokuapp.com/users/signin/admin', this.state)
        .then(response => {
          if(response.data !== "" && response.data !== 'undefined'){
            function setCookie(cname, cvalue, exdays) {
              var d = new Date();
              d.setTime(d.getTime() + (exdays*24*60*60*1000));
              var expires = "expires="+ d.toUTCString();
              document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            }
              setCookie("none",'KURO')
              setCookie("sessionT",response.data.token,30)
              setCookie("sessionID",response.data.id,30)
              window.location.replace('/admin/profile')
          }else{
            document.getElementById('msg').innerHTML="<div class='uk-alert-danger' uk-alert><a class='uk-alert-close' data-uk-close></a><p>Erreur, la combinaison ne semble pas correcte.</p></div>" 
            document.getElementById('submit').removeAttribute('disabled')
          }
        }).catch(err=>{console.log(err)
          document.getElementById('msg').innerHTML="<div class='uk-alert-danger' uk-alert><a class='uk-alert-close' data-uk-close></a><p>Erreur, l'utilisateur est introuvable.</p></div>"
          document.getElementById('submit').removeAttribute('disabled')
        })
    } catch(err) {
      document.getElementById('msg').innerHTML="<div class='uk-alert-danger' uk-alert><a class='uk-alert-close' data-uk-close></a><p>Erreur du serveur.</p></div>"
      console.log(err)
      document.getElementById('submit').removeAttribute('disabled')

    }
  }

  render(){
      const {email , password} = this.state
      function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) === ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
          }
        }
        return false;
    }
    
      function isLogged(){
        if(getCookie("sessionID") && getCookie("sessionT")){
            if(getCookie("sessionID")!=='undefined' && getCookie("sessionT")!=='undefined')
                return 1
            else{
                document.cookie = "sessionID= ; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
                document.cookie = "sessionT= ; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
                return 0
            }
        }else{
            return 0
        }
    }
    if(!isLogged()){
    return (
        <div align="center">
                <form onSubmit={this.handleSubmit} className="uk-padding">
                <h3>Connectez-vous</h3>
                <div id="msg"></div>
                    <div className="uk-margin">
                        <div className="uk-inline uk-width-1-2">
                            <span className="uk-form-icon" uk-icon="icon: user"></span>
                            <input name="email" placeholder="E-mail" value={email} onChange={this.changeHandler} className="uk-input" id="user" type="email"/>
                        </div>
                    </div>

                    <div className="uk-margin">
                        <div className="uk-inline uk-width-1-2">
                            <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                            <input name="password" placeholder="Password" value={password} onChange={this.changeHandler} className="uk-input" id="password" type="password"/>
                        </div>
                    </div>
                    <button type="submit" id="submit" className="uk-button uk-button-success-outline uk-width-1-4">Connectez-vous</button>
                </form>
            </div>
        );
    }else{
      window.location.replace('/Profile')
    }
  
  }
  
  }
    

export default Login;
