import React, { Component } from 'react'

export class Welcome extends Component {
    
    render() {
        
        function De1(){
            return (
                <div align="center" className="uk-section selection uk-light">
                    <div className="uk-container">
                        <h1>Outils Comptable</h1>
                        <p>Utilisez nos outils pour avoir un suivi en temps réel sur l'état financier de votre entreprise.</p>
                        <small>SARL / SASU / SAS / EURL / SCI / Startup ... </small>
                    </div>
                </div>
            )
        }
        function LLogin(){
            return (
                <div align="center" className="uk-section selection uk-light">
                    <div className="uk-container">
                        <h1>Connectez-vous</h1>
                        <p>Resez en contact avec votre conseillé et votre équipe comptable.</p>
                    </div>
                </div>
            )
        }
        
        if (window.location.href.split('/')[3] === "login") {
            return <LLogin />;
        }if(window.location.href.split('/')[3] === ""){
          return <De1 />;
        }else return ""
    }
}

export default Welcome