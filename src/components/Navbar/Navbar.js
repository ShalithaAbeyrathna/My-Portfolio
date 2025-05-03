import React, { useState } from "react";
import './Navbar.css';
import resumeImg from '../../assests/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assests/menu.png';


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <h1 className="logo-text">Shalitha.</h1>
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Projects</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Contact</Link>
            </div>

            <a
                href="https://drive.google.com/drive/folders/1kn4xCQaPLvCgUD-O1VTgyCjQALKEUDE5?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="desktopMenuBtn"
            >
                <img src={resumeImg} alt="" className="desktopMenuImg" />Resume
            </a>

            <img src={menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>

                <a
                    href="https://drive.google.com/drive/folders/1kn4xCQaPLvCgUD-O1VTgyCjQALKEUDE5?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="listItem"
                    onClick={() => setShowMenu(false)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                >   Resume
                </a>
            </div>
        </nav>
    )
}

export default Navbar;