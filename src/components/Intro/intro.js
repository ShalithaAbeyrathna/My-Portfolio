import React from 'react';
import './intro.css';
import bg from '../../assests/me.jpg';
import btnImg from '../../assests/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Shalitha</span><br />Web Developer</span>
                <p className="introPara">Experienced web developer with a passion for creating <br /> visually stunning and user-friendly websites.</p>
                <Link><button className="btn" onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}><img src={btnImg} alt="Hire Me" className="btnImg" /> Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro;