import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import "../../CSS/Navbars/CommanNavbar.css"

class CommanNavbar extends Component {

    state = { clicked : false }
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return (
            <>
            <nav className='CommanNavbar'>
                <a className='sign'>
                    <h1 className="sign-P"> <strong className="sign-stronG">eDoc  </strong>| THE ECHANNELING PROJECT</h1>
                </a>
        
                <div>
                    <ul id='navbar' className={this.state.clicked ? "#navbar activE" : "#navbar"}>
                        <li><Link to="/" className='activE' >Home</Link></li>
                        <li><Link to="/available-doctors" className='activE' >Dashboard</Link></li>
                        <li><Link to="/doctor-info" className='activE' >All Doctors</Link></li>
                        <li><Link to="/tests" className='activE' >Tests</Link></li>
                        <li><Link to="/about-us" className='activE' >About us</Link></li>
                    </ul>
                </div>
        
                <div id="mobile" onClick={this.handleClick}>
                <FontAwesomeIcon className='iconS' id='bar' icon={this.state.clicked ? faTimes : faBars} />
                </div>
            </nav>
            </>
          )
        }
    }
export default CommanNavbar