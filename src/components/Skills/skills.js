import React from 'react';
import fimg from '../../assests/frntend.jpg';
import bimg from '../../assests/bckend.jpg';
import dbimg from '../../assests/db.webp';
import './skills.css';

const Skills = () => {
    return (
        <section id="skills">
            <span className='skillTitle'>About Me</span>
            <span className='skillDesc'>As a dedicated Developer, I excel in creating engaging and user-friendly web experiences. My deep interest in software engineering and web development equips me with a comprehensive approach to projects. My journey in technology is fueled by a passion for learning new skills and tackling diverse challenges. With a robust foundation in building responsive and user-centric web applications, I am committed to delivering top-notch solutions that align with user needs and business objectives</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={fimg} alt='fimg' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Frontend Skills</h2>
                        <p>HTML
                            CSS
                            Bootstrap
                            JavaScript
                            React</p>
                    </div>

                </div>
                <div className='skillBar'>
                    <img src={bimg} alt='bimg' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Backend Skills</h2>
                        <p>PHP
                            JAVA
                            Node js</p>
                    </div>

                </div>
                <div className='skillBar'>
                    <img src={dbimg} alt='dbimg' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Database Skills</h2>
                        <p>MySQL
                            MongoDB</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Skills;