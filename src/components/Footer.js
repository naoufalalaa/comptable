import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import react from '../assets/img/atom.png'
import logo from '../logo512.png'
export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="uk-margin-remove uk-padding uk-light">
                    <div className="uk-column-1-3@s uk-column-divider">
                        <img src={logo} width="100px" alt="Compables du coins"/> 
        
                        <p>Cette application a pour but de rassembler et organiser vos données comptables.</p>
                    
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                       
                    </div>
                </footer>
                <p align="center" id="copy" className="uk-padding-small uk-light uk-margin-remove">Copyright &copy; <i><Link to="/">Astrolost.SARL</Link><br/><small className="uk-text-muted">Powered by <img src={react} width="25px" alt="" /></small></i></p>
            </div>
        )
    }
}

export default Footer
