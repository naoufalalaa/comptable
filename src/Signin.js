import React, { Component }  from 'react';
import axios  from 'axios';
export class Sign extends Component  {
  constructor(props) {
    super(props)

    this.state = {
        phone: '',
        email: '',
        password: ''
    }
  }

  changeHandler = e => {
    this.setState({[e.target.name] : e.target.value})
  }

  handleSubmit = e =>{
    e.preventDefault()

      axios.post('https://comptableapi.herokuapp.com/clients/signup', this.state)
      .then(response => {
        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+ d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }
        setCookie("sessionT",response.data.token,30)
        setCookie("sessionID",response.data.id,30)
        document.getElementById('msg').innerHTML="<div className='uk-alert-sucess' data-uk-alert><p>L'utilisateur a bien été ajouté.</p></div>"
        window.location.replace('/Profile')
      }).catch(err=>{console.log(err)
        document.getElementById('msg').innerHTML="<div className='uk-alert-danger' data-uk-alert><p>Erreur, l'utilisateur n'a pas été ajouté.</p></div>"
    })
    
  }

  render(){
      const {phone , email , password} = this.state
    function isTheSame(){
        var pass=document.getElementById('password')
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
      var pass=document.getElementById('password')
      var pass1=document.getElementById('passwordConf')
      
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
  return (
    <div className="uk-padding">
      <legend align="center" className="uk-margin uk-legend">Sign up</legend>
      <div id="msg"></div>

      <form align="center" className="uk-padding  uk-grid-small" data-uk-grid onSubmit={this.handleSubmit}>
            
            <div className="uk-width-1-2@s">    
              <input name="email" className="uk-input" type="email" onChange={this.changeHandler} value={email} required placeholder="E-mail address" id='email' />
            </div>
            <div className="uk-width-1-2@s">
              <input name="phone" className="uk-input" type="text" onChange={this.changeHandler} value={phone} required placeholder="+212 666-666666" id='phone' />
            </div>
            <div className="uk-width-1-2@s">
              <div data-uk-grid className="uk-grid-small uk-child-width-1-2">
                <div>
                  <input name="password" className="uk-input" required placeholder="Password" onChange={this.changeHandler} value={password} onKeyUp={changState} id="password" type="password"/>
                </div>
                <div>
                  <input className="uk-input" required placeholder="Confirm Password" onKeyUp={isTheSame} id="passwordConf" type="password"/> 
                </div>
                
                <span id="error"></span>
              </div>
            </div>
           
            <div className="uk-width-1-1@s">
              <button type="submit" id='submit' className="uk-margin uk-button uk-button-success">Sign up</button>
            </div>
      </form>
      </div>
    );
  }}

export default Sign;
