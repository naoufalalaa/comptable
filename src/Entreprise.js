import React, { Component } from "react";
import axios from "axios";
export class Profile extends Component{
    constructor(props) {
        super(props)
        this.id = document.cookie.slice(document.cookie.indexOf('sessionID=')+10).split(';')[0]
        this.token = document.cookie.slice(document.cookie.indexOf('sessionT=')+9).split(';')[0]
        this.state = {
            id: this.id,
            token: this.token,
            nomE: '',
            typeE: '',
            nbrAssocies: '',
            listAssocies: '',
            listGerant: '',
            sectActi: '',
            capital: ''
        }
      }
    
      changeHandler = e => {
        this.setState({[e.target.name] : e.target.value})
      }
      changeHandlerA = e => {
        if(document.getElementById('listAssocies').value===''){
            document.getElementById('listAssocies').classList.add('uk-form-danger')
        }else{
            this.setState({listAssocies : document.getElementById('listAssocies').value.split(',')})
            this.setState({nbrAssocies : document.getElementById('nbrAssocies').value})
            document.getElementById('listA').setAttribute('disabled',true)
        }
      }
      changeHandlerG = e => {
        if(document.getElementById('liste').value===''){
            document.getElementById('liste').classList.add('uk-form-danger')
        }else{
            this.setState({listGerant : (document.getElementById('liste').value).split(',')})
            document.getElementById('list').setAttribute('disabled',true)
        }
      }
    

      handleSubmit = e =>{
        e.preventDefault()
        this.changeHandlerA();
        this.changeHandlerG();
        document.getElementById('submit').setAttribute('disabled',true)
        document.getElementById('msg').innerHTML=`<div class='uk-alert-success' uk-alert><div uk-spinner></div> LOADING</div>`
        try{
            axios.post('https://comptableapi.herokuapp.com/users/ent/create',this.state)
            .then(response => {
                if(response.data === 'authentification error' ){
                    document.cookie =
                    "sessionID= ; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                    document.cookie =
                    "sessionT= ; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                    window.location.replace('/login')
                }
                document.getElementById('msg').innerHTML="<div class='uk-alert-success' uk-alert><a class='uk-alert-close' uk-close></a><p>L'entreprise "+response.data.nomE+" a ??t?? modif??e.</p></div>"
            })
            .catch(err=>{console.log(err)
                document.getElementById('submit').removeAttribute('disabled')
                document.getElementById('list').removeAttribute('disabled')
                document.getElementById('msg').innerHTML="<div class='uk-alert-danger' uk-alert><a class='uk-alert-close' uk-close></a><p>Erreur, l'entreprise n'a pas ??t?? modifi??e.</p></div>"
            })
        }catch(err){
            document.getElementById('msg').innerHTML="<div class='uk-alert-danger' uk-alert><a class='uk-alert-close' data-uk-close></a><p>Erreur du serveur.</p></div>"
            console.log(err)
        }
      }
render() {
    const {nomE , typeE , nbrAssocies , listAssocies, listGerant , sectActi, capital} = this.state
    var list = []
    function add(){
        var ee = document.getElementById('list').value
        document.getElementById('list').removeAttribute('disabled')
        if(ee){
            list.push(ee)
            document.getElementById('liste').value=list
        }
        document.getElementById('list').value=''
    }
  

    function min(){
        list.pop()
        document.getElementById('liste').value=list
        document.getElementById('list').removeAttribute('disabled')
    }
    var listA = []
    function addA(){
        var ee = document.getElementById('listA').value
        document.getElementById('listA').removeAttribute('disabled')
        if(ee){
            listA.push(ee)
            document.getElementById('listAssocies').value=listA
            document.getElementById('nbrAssocies').value=listA.length
        }
        document.getElementById('listA').value=''
    }
    function minA(){
        listA.pop()
        document.getElementById('listAssocies').value=listA
        document.getElementById('listA').removeAttribute('disabled')
        document.getElementById('nbrAssocies').value=listA.length
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
            Entreprise review
            </h3>
            <div id="msg"></div>
            <div align="center">
                <form align="center" encType="multipart/form-data" className="uk-padding  uk-grid-small" data-uk-grid onSubmit={this.handleSubmit}>
                    
                    <div className="uk-width-1-2@s"> 
                        <input name="nomE" className="uk-input" type="text" onChange={this.changeHandler} value={nomE} required placeholder="Nom Entreprise" id='nomE' />
                    </div>
                    <div className="uk-width-1-2@s"> 
                        <select name="typeE" onChange={this.changeHandler} value={typeE} required className="uk-select">
                            <option>----?? Selectionner le type de votre Entreprise ??----</option>
                            <option value="Entreprise individuelle (EI)">Entreprise individuelle (EI)</option>
                            <option value="Entreprise individuelle ?? responsabilit?? limit??e (EIRL)">Entreprise individuelle ?? responsabilit?? limit??e (EIRL)</option>
                            <option value="Entreprise unipersonnelle ?? responsabilit?? limit??e (EURL)">Entreprise unipersonnelle ?? responsabilit?? limit??e (EURL)</option>
                            <option value="Soci??t?? ?? responsabilit?? limit??e (SARL)">Soci??t?? ?? responsabilit?? limit??e (SARL)</option>
                            <option value="Soci??t?? anonyme (SA)">Soci??t?? anonyme (SA)</option>
                            <option value="Soci??t?? par actions simplifi??e (SAS) / (unipersonnelle (SASU))">Soci??t?? par actions simplifi??e (SAS) / (unipersonnelle (SASU))</option>
                            <option value="Soci??t?? en nom collectif (SNC)">Soci??t?? en nom collectif (SNC)</option>
                            <option value="La soci??t?? coop??rative de production (SCOP)">La soci??t?? coop??rative de production (SCOP)</option>
                            <option value="Soci??t?? en commandite par actions (SCA)">Soci??t?? en commandite par actions (SCA)</option>
                            <option value="Soci??t?? en commandite simple (SCS)">Soci??t?? en commandite simple (SCS)</option>
                        </select>
                    </div>
                    <div className="uk-width-1-2@s"> 
                        <input name="capital" className="uk-input" type="text" onChange={this.changeHandler} value={capital} required placeholder="Capital de l'entreprise" />
                    </div>
                    <div className="uk-width-1-2@s">    
                    <input name="sectActi" className="uk-input" type="text" onChange={this.changeHandler} value={sectActi} required placeholder="Secteur d'activit??" />
                    </div>
                    <div className="uk-width-1-2@s">
                        Associ??s
                        <div className="uk-grid-small" data-uk-grid>
                            <div className="uk-width-2-3">
                                <input type="text" id="listA" name="listA" placeholder="Votre Associ??" className="uk-input" />
                            </div>
                            <div className="uk-width-1-3">
                                <button type="button" className="uk-button uk-button-secondary" onClick={addA}>+</button>
                            </div>
                        </div>
                        <div className="uk-grid-small" data-uk-grid>
                            <div className="uk-width-2-3">
                                <input  disabled placeholder="Liste Associ??s" name='listAssocies' value={listAssocies} onChange={this.changeHandlerA} className="uk-input" type="text" id="listAssocies" />
                                <input name='nbrAssocies'  value={nbrAssocies} onChange={this.changeHandler} hidden type="number" id="nbrAssocies" />
                            </div>
                            <div className="uk-width-1-3">
                                <button type="button" className="uk-button uk-button-secondary" onClick={minA}>-</button>
                            </div>
                            <div className="uk-width-1-1">
                                <button type="button" className="uk-button uk-button-primary" onClick={this.changeHandlerA}><span data-uk-icon="icon: check;"></span> Valider la liste</button>
                            </div>
                        </div>
                    </div>
                    <div className="uk-width-1-2@s">
                        G??rants
                        <div className="uk-grid-small" data-uk-grid>
                            <div className="uk-width-2-3">
                                <input type="text" id="list" name="list" placeholder="Votre g??rant" className="uk-input" />
                            </div>
                            <div className="uk-width-1-3">
                                <button type="button" className="uk-button uk-button-secondary" onClick={add}>+</button>
                            </div>
                        </div>
                        <div className="uk-grid-small" data-uk-grid>
                            <div className="uk-width-2-3">
                                <input disabled placeholder="Liste G??rants" name='listGerant' value={listGerant} onChange={this.changeHandler} className="uk-input" type="text" id="liste" />
                            </div>
                            <div className="uk-width-1-3">
                                <button type="button" className="uk-button uk-button-secondary" onClick={min}>-</button>
                            </div>
                            <div className="uk-width-1-1">
                                <button type="button" className="uk-button uk-button-primary" onClick={this.changeHandlerG}><span data-uk-icon="icon: check;"></span> Valider la liste</button>
                            </div>
                        </div>
                    </div>
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