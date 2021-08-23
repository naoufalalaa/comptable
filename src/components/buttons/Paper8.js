import axios from 'axios';
import React from 'react'
import paper from '../../assets/img/paper.png'
export default function Paper1() {
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
      const userId = window.location.pathname.split('/')[3]
      function validate(){
        const id= getCookie('sessionID')
        const token= getCookie('sessionT')
        const body = {
            id : id,
            token : token,
            UserId : userId,
            PaperId : 8,
            advancement : 'prêt'
        }
        axios.put('https://comptableapi.herokuapp.com/paperAdvancements/update',body)
        .then( ()=>{
            document.getElementById('pret8').setAttribute('checked',true)
            document.getElementById('encours8').removeAttribute('checked')
            document.getElementById('nondemande8').removeAttribute('checked')
        }
        )
        .catch(err=>console.log(err))
    }
    function encours(){
        const id= getCookie('sessionID')
        const token= getCookie('sessionT')
        const body = {
            id : id,
            token : token,
            UserId : userId,
            PaperId : 8,
            advancement : 'en cours'
        }
        axios.put('https://comptableapi.herokuapp.com/paperAdvancements/update',body)
        .then(response=>{
            document.getElementById('encours8').setAttribute('checked',true)
            document.getElementById('pret8').removeAttribute('checked')
            document.getElementById('nondemande8').removeAttribute('checked')
        }
        )
        .catch(err=>console.log(err))
    }
    function nonDemande(){
        const id= getCookie('sessionID')
        const token= getCookie('sessionT')
        const body = {
            id : id,
            token : token,
            UserId : userId,
            PaperId : 8,
            advancement : 'non demandé'
        }
        axios.put('https://comptableapi.herokuapp.com/paperAdvancements/update',body)
        .then( ()=>{
            document.getElementById('nondemande8').setAttribute('checked',true)
            document.getElementById('pret8').removeAttribute('checked')
            document.getElementById('encours8').removeAttribute('checked')
        }
        )
        .catch(err=>console.log(err))
    }
   
    function Button(){
        axios.get('https://comptableapi.herokuapp.com/paperAdvancements/'+userId)
        .then(response=>{
            var paper = response.data[7]
            if(paper.advancement === "en cours"){
                document.getElementById('encours8').setAttribute('checked',true)
                document.getElementById('pret8').removeAttribute('checked')
                document.getElementById('nondemande8').removeAttribute('checked')
            }
            if(paper.advancement === "prêt"){
                document.getElementById('pret8').setAttribute('checked',true)
                document.getElementById('encours8').removeAttribute('checked')
                document.getElementById('nondemande8').removeAttribute('checked')
            }
            if(paper.advancement === "non demandé"){
                document.getElementById('nondemande8').setAttribute('checked',true)
                document.getElementById('pret8').removeAttribute('checked')
                document.getElementById('encours8').removeAttribute('checked')
            }
        })
        .catch(err=>{
            console.error(err)
            return false
        })
        return (
            <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                <label><input name='state8' id="encours8" className="uk-radio" value="en cours" onClick={encours} type="radio"/> En cours</label><br/>
                <label><input name='state8' id="pret8" className="uk-radio" value="pret" onClick={validate} type="radio"/> Prêt</label><br/>
                <label><input name='state8' id="nondemande8" className="uk-radio" value="nondemande" onClick={nonDemande} type="radio"/> Non Demandé</label>
            </div>
        )
    }
    
    
    return (
        <div>
            <div className="uk-card uk-padding-small uk-card-default">
                <div className="uk-card-media-top">
                    <img width="50px" src={paper} alt="Les Annonces"/>
                </div>
                <div className="uk-card-body">
                    <h4>Les Annonces</h4>
                    <Button/>
                </div>
            </div>
        </div>
    )
}
