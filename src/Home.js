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
                    <Link className="uk-button uk-button-success" to="/sign">Sign in</Link>
                </div>

                <div align="center">
                    <img src={flash} width="50px" alt=""/>
                    <p className="uk-width-1-2@m">Restez en contact avec votre comptable tout au-long des processus juridiques et économiques.</p>
                    <Link className="uk-button uk-button-success-outline" to="/profile">Profil</Link>
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
                            <div className="uk-card uk-card-secondary uk-box-shadow-hover-xlarge uk-card-body dd f uk-grid-margin" >
                                <div onClick={showF}><span data-uk-icon="chevron-down"></span> <span className="titles">Fiches pratiques par thématique</span>  <span data-uk-icon="chevron-down"></span></div>
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
                            <div className="uk-card uk-card-default uk-box-shadow-hover-xlarge uk-card-body f uk-grid-margin">
                                <div onClick={showPL}><span data-uk-icon="chevron-down"></span> <span className="titles">Fiches pratiques les plus lues</span> <span data-uk-icon="chevron-down"></span> </div>
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
            <div align="center">
                <h1>Types d'entreprises</h1>
            <table className="uk-text-center uk-margin uk-width-5-6 uk-table uk-table-striped">
                <tbody>
                    <tr>
                        <td>&nbsp;</td>
                        <td><strong>Associé(s)</strong></td>
                        <td><strong>Dirigeant(s)</strong></td>
                        <td><strong>Capital social</strong></td>
                        <td><strong>Régime social du ou des dirigeant(s)</strong></td>
                        <td><strong>Imposition des bénéfices</strong></td>
                    </tr>
                    <tr>
                        <td>
                            <p><a href="#Entreprise individuelle (EI)"><strong>Entreprise individuelle (EI)</strong></a></p>
                            <p><strong><a href="#Entreprise individuelle (EI)">Entreprise individuelle à responsabilité limitée (EIRL)</a></strong></p>
                        </td>
                        <td>L'entrepreneur individuel</td>
                        <td>L'entrepreneur individuel</td>
                        <td>Aucun</td>
                        <td>Travailleur non-salarié</td>
                        <td>Impôt sur le revenu (possibilité d'impôt sur les sociétés sous conditions en entreprise individuelle à responsabilité limitée)</td>
                    </tr>
                    <tr>
                        <td><a href="#Entreprise unipersonnelle à responsabilité limitée (EURL)"><strong>Entreprise unipersonnelle à responsabilité limitée (EURL)</strong></a></td>
                        <td>Une personne physique et morale</td>
                        <td>Un ou plusieurs gérants (personnes physiques)</td>
                        <td>Libre</td>
                        <td>Travailleur non-salarié (associé unique) ou assimilé-salarié (plusieurs associés)</td>
                        <td>Impôt sur le revenu (personne physique - possibilité d'impôt sur les sociétés), impôt sur les sociétés (personne morale)</td>
                    </tr>
                    <tr>
                        <td><a href="#Société à responsabilité limitée (SARL)"><strong>Société à responsabilité limitée (SARL)</strong></a></td>
                        <td>2 à 100 personnes physiques ou morales</td>
                        <td>Un ou plusieurs gérants (personnes physiques)</td>
                        <td>Libre</td>
                        <td>Travailleur non-salarié (gérant majoritaire), assimilé salarié (gérant égalitaire ou majoritaire)</td>
                        <td>Impôt sur les sociétés dans la plupart des cas</td>
                    </tr>
                    <tr>
                        <td><a href="#Société anonyme (SA)"><strong>Société anonyme (SA)</strong></a></td>
                        <td>Au minimum 2 personnes physiques ou morales (ou 7 pour les sociétés cotées en bourse)</td>
                        <td>Un conseil d'administration de 3 à 18 membres, avec un président désigné parmi eux</td>
                        <td>
                            <p>Au minimum&nbsp; 37 000 €</p>
                        </td>
                        <td>Assimilé-salarié (président du conseil d'administration)</td>
                        <td>Impôt sur les sociétés dans la plupart des cas</td>
                    </tr>
                    <tr>
                        <td>
                            <p><a href="#Société par actions simplifiée (SAS)"><strong>Société par actions simplifiée (SAS)</strong></a></p>
                            <p><a href="#Société par actions simplifiée (SAS)"><strong>Société par actions simplifiée unipersonnelle (SASU)</strong></a></p>
                        </td>
                        <td>Au minimum une personne physique ou morale</td>
                        <td>Un président (personne physique ou morale), obligation d'un représentant légal</td>
                        <td>Libre</td>
                        <td>Assimilé salarié (président)</td>
                        <td>Impôt sur les sociétés dans la plupart des cas</td>
                    </tr>
                    <tr>
                        <td><a href="#Société en nom collectif (SNC)"><strong>Société en nom collectif (SNC)</strong></a></td>
                        <td>Au minimum 2 personnes physiques ou morales</td>
                        <td>Un ou plusieurs gérants (personnes physiques ou morales)</td>
                        <td>Libre</td>
                        <td>Travailleur non-salarié</td>
                        <td>Impôt sur le revenu (part des bénéfices des associés), option de l'impôt sur les sociétés possible pour la société</td>
                    </tr>
                    <tr>
                        <td><a href="#Scop"><strong>La société coopérative de production (SCOP)</strong></a></td>
                        <td>Les salariés de l'entreprise (à hauteur de 51% minimum du capital) et éventuellement des investisseurs extérieurs</td>
                        <td>Un dirigeant ou gérant élu par les associés majoritaires</td>
                        <td>30 € minimum en SCOP SARL ou SAS et 18 500 € pour la SCOP SA</td>
                        <td>Assimilé-salarié (directeur et dirigeants de l'entreprise)</td>
                        <td>Impôt sur les sociétés</td>
                    </tr>
                    <tr>
                        <td>
                            <p><strong><a href="#Société en commandite par actions (SCA)">Société en commandite par actions (SCA)</a></strong></p>
                        </td>
                        <td>Au minimum 4 associés dont 1 commandité et 3 commanditaires</td>
                        <td>Un ou plusieurs gérants (personnes physiques ou morales) nommé(s) par le(s) commandité(s)</td>
                        <td>
                            <p>Au minimum&nbsp; 37 000 €</p>
                        </td>
                        <td>Assimilé-salarié (gérant)</td>
                        <td>Impôt sur les sociétés</td>
                    </tr>
                    <tr>
                        <td>
                        <p><strong><a href="#Société en commandite simple (SCS)">Société en commandite simple (SCS)</a></strong></p>
                        </td>
                        <td>Au minimum 2 associés dont 1 commandité et 1 commanditaire</td>
                        <td>Un ou plusieurs gérants (personnes physiques ou morales) nommé(s) par le(s) commandité(s)</td>
                        <td>Libre</td>
                        <td>Assimilé-salarié (gérant)</td>
                        <td>Impôt sur les sociétés</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )

}

export default Home
