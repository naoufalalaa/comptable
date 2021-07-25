import React, { useEffect }  from 'react';
function Sign() {

    useEffect( () => {
        document.title = 'Comptable — Sign UP'
        document.getElementById('about').classList.remove('uk-active')
        document.getElementById('home').classList.remove('uk-active')
    })
    function isTheSame(){
      var pass=document.getElementById('password')
      var pass1=document.getElementById('passwordConf')
      if(pass.value===pass1.value){
        pass1.classList.add('uk-form-success')
      }else{
        pass.classList.add('uk-form-danger')
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
        document.getElementById('submit').setAttribute('disabled','')

      }
    }
    function handleSubmit(event){

    }
  return (
    <div className="uk-padding">
      <legend align="center" className="uk-margin uk-legend">Sign up</legend>
      <form align="center" className="uk-padding  uk-grid-small" data-uk-grid onSubmit={handleSubmit}>
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
              <input className="uk-input" type="text" placeholder="E-mail address" id='email' />
            </div>
            <div className="uk-width-1-2@s">
              <select id="type" className="uk-select">
                  <option>Type d'entreprise</option>
                  <option>S.A.R.L</option>
                  <option>Option 02</option>
              </select>
            </div>
            <div className="uk-width-1-2@s">
              <div data-uk-grid className="uk-grid-small uk-child-width-1-2">
                <div>
                  <input className="uk-input" placeholder="Password" onChange={changState} id="password" type="password"/>
                </div>
                <div>
                  <input className="uk-input" placeholder="Confirm Password" onChange={isTheSame} id="passwordConf" type="password"/>
                </div>
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
