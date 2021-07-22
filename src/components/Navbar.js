import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo512.png'
import BarLog from './BarLog'
import BarLogMob from './BarLogMob'

export class Navbar extends Component {
    
    render() {
        function about(){
            document.querySelector('#home').classList.remove('uk-active');
            document.querySelector('#about').classList.add('uk-active')
        }
        function home(){
            document.querySelector('#about').classList.remove('uk-active');
            document.querySelector('#home').classList.add('uk-active')
        }
        return (
            <div className="uk-section-secondary uk-preserve-color wel">

                <div data-uk-sticky="animation: uk-animation-slide-top; sel-target: #nav; cls-active: nabs uk-navbar-sticky ; cls-inactive: uk-navbar-transparent uk-light; top: 200">

                    <nav className="uk-navbar-container uk-navbar-transparent uk-light uk-visible@m" >
                        <div className="uk-container uk-container-expand"id="nav" data-uk-navbar="mode: click; offset : 0">
                            <div className="uk-navbar-left">

                                <ul className="uk-navbar-nav">
                                    <li id="home" className="uk-active"><Link onClick={home} to="/">Home</Link></li>
                                    <li>
                                        <a>Parent<span data-uk-icon="icon: chevron-down;"></span></a>
                                        <div className="uk-navbar-dropdown">
                                            <ul className="uk-nav uk-navbar-dropdown-nav">
                                                <li className="uk-active"><Link to="">Active</Link></li>
                                                <li><Link to="">Item</Link></li>
                                                <li><Link to="">Item</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li id="about"><Link onClick={about} to="/about">about</Link></li>
                                </ul>

                            </div>
                            <div className="uk-navbar-center">
                                <img src={logo} width="50px" alt=""/>
                                <i><strong className="uk-text-muted">&nbsp; Comptables du coins</strong></i>
                            </div>
                            <div className="uk-navbar-right">
                                    <BarLog />
                            </div>
                        </div>
                        
                    </nav>
                </div>
                <nav className="uk-navbar uk-navbar-container uk-navbar-transparent uk-hidden@m">
                    <div className="uk-navbar-left" data-uk-toggle="target: #offcanvas-nav">
                        <Link className="uk-navbar-toggle">
                            <span data-uk-navbar-toggle-icon></span> <span className="uk-margin-small-left">Menu</span>
                        </Link>
                    </div>
                    
                    <div className="uk-navbar-right">
                        <BarLogMob />
                    </div>
                </nav>


                <div id="offcanvas-nav" data-uk-offcanvas="overlay: true">
                    <div className="uk-offcanvas-bar">
                    <img src={logo} width="50px" alt=""/>

                        <ul className="uk-nav uk-nav-default">
                            <li className="uk-active"><Link>Active</Link></li>
                            <li className="uk-parent">
                                <a href="">Créer</a>
                                <ul className="uk-nav-sub">
                                    <li><Link>Sub item</Link></li>
                                    <li><Link>Sub item</Link></li>
                                </ul>
                            </li>
                            <li className="uk-nav-header">Header</li>
                        </ul>

                    </div>
                </div>
                <div className="uk-section uk-light">
                    <div align="center" id="welcome" className="uk-container">
            
                        <h1>Outils Comptable</h1>
            
                        <p>Utilisez nos outils pour avoir un suivi en temps réel sur l'état financier de votre entreprise.</p>
            
                        <small>SARL / SASU / SAS / EURL / SCI / Startup ... </small>
                        
                    </div>
                </div>
          </div>
        )
    }
}

export default Navbar