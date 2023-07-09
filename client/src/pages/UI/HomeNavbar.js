import React, { Component } from 'react'
import "../../CSS/Navbars/HomeNavbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

class HomeNavbar extends Component {

    state = { clicked : false }
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return (
            <>
            <nav className='homepage'>
                <a className='sign'>
                    <h1 className="sign-p"> <strong className="sign-strong">eDoc  </strong>| THE ECHANNELING PROJECT</h1>
                </a>
        
                <div>
                    <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
                        <li><Link to="/" className='active' >Home</Link></li>
                        <li><Link to="/available-doctors" className='active' >Dashboard</Link></li>
                        <li><Link to="/doctor-info" className='active' >All Doctors</Link></li>
                        <li><Link to="/tests" className='active' >Tests</Link></li>
                        <li><Link to="/about-us" className='active' >About us</Link></li>
                    </ul>
                </div>
        
                <div id="mobile" onClick={this.handleClick}>
                <FontAwesomeIcon className='icons' id='bar' icon={this.state.clicked ? faTimes : faBars} />
                </div>
            </nav>
            </>
          )
        }
    }
export default HomeNavbar