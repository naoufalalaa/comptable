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

  handleSubmit = e =>{
    e.preventDefault()

      axios.post('https://comptableapi.herokuapp.com/users/signin', this.state)
      .then(response => {
        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+ d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }
        if(response.data !== "" && response.data !== 'undefined'){
            setCookie("sessionT",response.data.token,30)
            setCookie("sessionID",response.data.id,30)
            window.location.replace('/Profile')
        }else{
        document.getElementById('msg').innerHTML="<div class='uk-alert-danger' uk-alert><a class='uk-alert-close' data-uk-close></a><p>Erreur, l'utilisateur est introuvable.</p></div>"
        }
        
      }).catch(err=>{console.log(err)
        document.getElementById('msg').innerHTML="<div class='uk-alert-danger' uk-alert><a class='uk-alert-close' data-uk-close></a><p>Erreur, la combinaison ne semble pas correcte.</p></div>"
    })
    
  }

  render(){
      const { email , password} = this.state
    return (
        <div align="center">
                <form onSubmit={this.handleSubmit} className="uk-padding">
                <h3>Connectez-vous</h3>
                <div id="msg"></div>
                    <div className="uk-margin">
                        <div className="uk-inline uk-width-1-2">
                            <span className="uk-form-icon" data-uk-icon="icon: user"></span>
                            <input name="email" placeholder="E-mail" value={email} onChange={this.changeHandler} className="uk-input" id="user" type="email"/>
                        </div>
                    </div>

                    <div className="uk-margin">
                        <div className="uk-inline uk-width-1-2">
                            <span className="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: lock"></span>
                            <input name="password" placeholder="Password" value={password} onChange={this.changeHandler} className="uk-input" id="password" type="password"/>
                        </div>
                    </div>
                    <button type="submit" className="uk-button uk-button-success-outline uk-width-1-4">Connectez-vous</button>

                </form>
            </div>
        );
    }}

export default Login;
