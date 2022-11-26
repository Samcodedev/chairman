import React from 'react'
import './NavBar.css'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

const NavBar = () => {
  return (
    <div className='nav_bar'>
      <div className="sub_nav_bar">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="dd">
            <GiHamburgerMenu />
            <div className="navbar" id='ull'>
                <ul>
                    <li>
                        <Link to="/"><h4>Home</h4></Link>
                    </li>
                    <li>
                        <h4>Government</h4>
                        <ul id="list">
                            <div className="cover">
                                <Link to="/chairman"><li>Chairman</li></Link>
                                <Link to="/government"><li>Vice Chairman</li></Link>
                                <Link to="/government"><li>Council Manager</li></Link>
                                <Link to="/government"><li>Council Treasurer</li></Link>
                                <Link to="/government"><li>Secretary to LCDA</li></Link>
                                <Link to="/government"><li>Chief of Staff</li></Link>
                                <Link to="/government"><li>Supervisors</li></Link>
                            </div>
                        </ul>
                    </li>
                    <li>
                        <h4>Department</h4>
                        <ul id="list">
                            <div className="cover">
                                <Link to="/works"><li>Works & Infrastructure</li></Link>
                                <Link to="/works"><li>Budget & Planning</li></Link>
                                <Link to="/works"><li>Agric & Social</li></Link>
                                <Link to="/works"><li>Accounting $ Finance</li></Link>
                                <Link to="/works"><li>Marriage & Engagement</li></Link>
                                <Link to="/works"><li>ICT & Media</li></Link>
                            </div>
                        </ul>
                    </li>
                    <li>
                        <h4>Legislature</h4>
                        <ul id="list">
                            <div className="cover">
                                <Link to="/legislature"><li>Leader</li></Link>
                                <Link to="/legislature"><li>Deputy Leader</li></Link>
                                <Link to="/legislature"><li>Majority Leader</li></Link>
                                <Link to="/legislature"><li>Chief Whip</li></Link>
                                <Link to="/legislature"><li>Councilor</li></Link>
                                <Link to="/legislature"><li>Clerk of The House</li></Link>
                            </div>
                        </ul>
                    </li>
                    <li>
                        <h4>Services</h4>
                        <ul id="list">
                            <div className="cover">
                                <li>Education</li>
                                <li>Marriage Registration</li>
                                <li>Health</li>
                                <li>Human Resources</li>
                                <li>Environmental service</li>
                            </div>
                        </ul>
                    </li>
                    <li>
                        <h4>News</h4>
                        <ul id="list">
                            <div className="cover">
                                <li>Latest News</li>
                                <li>Gallery</li>
                            </div>
                        </ul>
                    </li>
                    <li>
                        <h4>About Us</h4>
                    </li>
                </ul>
                <div className="contact">
                    <h2>Contact Us</h2>
                    <p>5 arigbanla beside NYSC camp, orile agege, Lagos state</p>
                    <p>+234 906 792 5333</p>
                    <p>OrileAgege@gmail.com</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
