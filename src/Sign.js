import React, { useEffect }  from 'react';
function Sign() {

    useEffect( () => {
        document.title = 'Comptable — Sign UP'
        document.getElementById('about').classList.remove('uk-active')
        document.getElementById('home').classList.remove('uk-active')
      })
      let ok=false
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
          ok=true
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
    function handleSubmit(event){
      if(ok){
        var data= {
          "firstName" : document.getElementById('firstName').value ,
          "lastName" : document.getElementById('lastName').value ,
          "email" : document.getElementById('email').value ,
          "password" : document.getElementById('password').value ,
          "phone" : document.getElementById('phone').value
        }
      }
      console.log(data)
    }
  return (
    <div className="uk-padding">
      <legend align="center" className="uk-margin uk-legend">Sign up</legend>
      <form method="post" align="center" className="uk-padding  uk-grid-small" data-uk-grid onSubmit={handleSubmit}>
            <div className="uk-width-1-2@s">
              <div data-uk-grid className="uk-grid-small uk-child-width-1-2">
                <div>
                  <input className="uk-input" type="text" placeholder="FIRST Name" id='firstName' />
                </div>
                <div>
                  <input className="uk-input" type="text" placeholder="LAST Name" id='lastName' />
                </div>
              </div>
            </div>
            <div className="uk-width-1-2@s">    
              <input className="uk-input" type="email" placeholder="E-mail address" id='email' />
            </div>
            <div className="uk-width-1-2@s">
              <input className="uk-input" type="text" placeholder="+212 666-666666" id='phone' />
            </div>
            <div className="uk-width-1-2@s">
              <div data-uk-grid className="uk-grid-small uk-child-width-1-2">
                <div>
                  <input className="uk-input" placeholder="Password" onChange={changState} id="password" type="password"/>
                </div>
                <div>
                  <input className="uk-input" placeholder="Confirm Password" onChange={isTheSame} id="passwordConf" type="password"/> 
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
}

export default Sign;
