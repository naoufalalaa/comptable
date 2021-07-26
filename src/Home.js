import React, { useEffect } from 'react'
import magic from './assets/img/magic.png'
import flash from './assets/img/flash.png'
import {Link} from 'react-router-dom'
import Welcome from './components/Welcome'
 
const Home = ()=> {

    useEffect( () => {
        document.title='Comptable du Coins'
    }
    )
    function showG(){
        if(document.getElementById('Guide')){
            document.getElementById('Guide').classList.toggle("none")
        }
    }
     function showF(){
        if(document.getElementById('Fiche')){
            document.getElementById('Fiche').classList.toggle("none");
        }
    }
     function showPL(){
        if(document.getElementById('PL')){
            document.getElementById('PL').classList.toggle("none")
        }
    }
    return (
        <div className="Home">
            <Welcome/>
            <div className="uk-child-width-1-2@s uk-padding" data-uk-grid data-uk-parallax="y:-10">

                <div align="center">
                    <img src={magic} width="50px" alt=""/>
                    <p className="uk-width-1-2@m">Créez un nouvel utilisateur pour un profil entreprise ou société.</p>
                    <button className="uk-button uk-button-success">Sign in</button>
                </div>

                <div align="center">
                    <img src={flash} width="50px" alt=""/>
                    <p className="uk-width-1-2@m">Restez en contact avec votre comptable tout au-long des processus juridiques et économiques.</p>
                    <button className="uk-button uk-button-success-outline">Profil</button>
                </div>

            </div>
            <div align="center" uk-parallax="y:-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fillOpacity="0.7" d="M0,320L48,309.3C96,299,192,277,288,234.7C384,192,480,128,576,128C672,128,768,192,864,192C960,192,1056,128,1152,106.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                <div id="r">
                    <h2 data-uk-parallax="y:-100"><u>Fiches et Guides <i>Pratiques</i></u></h2>
                    <div data-uk-parallax="y:-200" className="uk-child-width-expand@m uk-text-center uk-padding uk-margin" data-uk-grid="parallax: 40">
                        <div>
                            <div className="uk-card uk-card-default uk-box-shadow-hover-xlarge uk-card-body uk-grid-margin f" >
                            <div onClick={showG}><span data-uk-icon="chevron-down"></span> <span className="titles">Guides pratiques</span> <span data-uk-icon="chevron-down"></span></div>
                                <div id="Guide" className="uk-margin uk-text-left none">
                                    <ul className="uk-list uk-list-striped">
                                        <li className="uk-link-muted"><Link to="/"> Guide de l’auto-entrepreneur<span className="uk-right" data-uk-icon="icon: chevron-double-right;"></span></Link></li>
                                        <li className="uk-link-muted"><Link to="/"> Guide de la SASU <span className="uk-right" data-uk-icon="icon: chevron-double-right;"></span></Link></li>
                                        <li className="uk-link-muted"><Link to="/"> Guide de la SAS <span className="uk-right" data-uk-icon="icon: chevron-double-right;"></span></Link></li>
                                        <li className="uk-link-muted"><Link to="/"> Guide de la SARL <span className="uk-right" data-uk-icon="icon: chevron-double-right;"></span></Link></li>
                                        <li className="uk-link-muted"><Link to="/"> Guide de la création d’entreprise <span className="uk-right" data-uk-icon="icon: chevron-double-right;"></span></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div onClick={showF} className="uk-card uk-card-secondary uk-box-shadow-hover-xlarge uk-card-body dd f uk-grid-margin" >
                            <span data-uk-icon="chevron-down"></span> <span className="titles">Fiches pratiques par thématique</span>  <span data-uk-icon="chevron-down"></span>
                                <div id="Fiche" className="uk-margin uk-text-left none">
                                    <ul className="uk-list uk-list-striped">
                                        <li className="uk-link-muted"><Link to="/"> Créer une entreprise <span className="uk-right" data-uk-icon="icon: chevron-double-right;"></span></Link></li>
                                        <li className="uk-link-muted"><Link to="/"> List item 2 <span className="uk-right" data-uk-icon="icon: chevron-double-right;"></span></Link></li>
                                        <li className="uk-link-muted"><Link to="/"> List item 3 <span className="uk-right" data-uk-icon="icon: chevron-double-right;"></span></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div onClick={showPL} className="uk-card uk-card-default uk-box-shadow-hover-xlarge uk-card-body f uk-grid-margin">
                                <span data-uk-icon="chevron-down"></span> <span className="titles">Fiches pratiques les plus lues</span> <span data-uk-icon="chevron-down"></span> 
                                <div id="PL" className="uk-margin uk-text-left none">
                                    <ul className="uk-list uk-list-striped">
                                        <li className="uk-link-muted"><Link to="/"> List item 1 <span className="uk-right" data-uk-icon="icon: chevron-double-right;"></span></Link></li>
                                        <li className="uk-link-muted"><Link to="/"> List item 2 <span className="uk-right" data-uk-icon="icon: chevron-double-right;"></span></Link></li>
                                        <li className="uk-link-muted"><Link to="/"> List item 3 <span className="uk-right" data-uk-icon="icon: chevron-double-right;"></span></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    )

}

export default Home
