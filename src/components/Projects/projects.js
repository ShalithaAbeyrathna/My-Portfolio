import React, { useState} from 'react';
import './projects.css';
import Portfolio1 from '../../assests/filmmania.png';
import Portfolio2 from '../../assests/deliver.png';
import Portfolio3 from '../../assests/skillbridge.jpg';
const Projects = () => {

    const [showAll, setShowAll] = useState(false);

    const projects = [
        {
            img: Portfolio1,
            title: "Film Mania",
            description: "The main objective of this project is to create a dynamic and engaging movie site that appeals to a wide range of users and provides a valuable resource for exploring and discovering new movies to watch.",
            githubLink: "https://github.com/ShalithaAbeyrathna/Film-Mania-Web-Application",
            linkedinLink: "https://www.linkedin.com/posts/shalitha-abeyrathna-999895337_php-mysql-webdevelopment-activity-7323322277217959936-kaZO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFSrkEUBY6fXbGg8f_s8wWkwD5z_Ep5vh1M"
        },
        {
            img: Portfolio2,
            title: "Deliver Delights",
            description: "Worked together to create a web-based restaurant management system that would manage tasks including collecting payments, managing menus, and taking orders from patrons. emphasised usability and usefulness in the design and implementation of important backend functionalities.",
            githubLink: "https://github.com/ShalithaAbeyrathna/-Restaurant-Management-System",
            linkedinLink: "https://www.linkedin.com/posts/shalitha-abeyrathna-999895337_project-webdevelopment-activity-7322971503803756547-SpRI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFSrkEUBY6fXbGg8f_s8wWkwD5z_Ep5vh1M"
        },
        {
            img: Portfolio3,
            title: "Skill Bridge Hub",
            description: "Skill Bridge Hub is an advanced task bidding platform designed to address the gap for service professionals outside the software industry. Targeting urban areas, this platform connects diverse professionals with job opportunities, offering an inclusive and efficient service marketplace.",
            githubLink: "https://github.com/ShalithaAbeyrathna/Skill-Bridge-Hub-project-2",
            linkedinLink: "https://www.linkedin.com/posts/shalitha-abeyrathna-999895337_excited-to-share-our-latest-project-activity-7323320462887772160-cWx4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFSrkEUBY6fXbGg8f_s8wWkwD5z_Ep5vh1M"
        },
    ];

    const visibleProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <section id='works'>
            <h2 className="worksTitle">Projects</h2>
            <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
            <div className="worksImgs">
                {visibleProjects.map((project, index) => (
                    <div key={index} className="projectCard">
                        <img src={project.img} alt={project.title} className="worksImg" />
                        <div className="projectContent">
                            <h3 className="projectTitle">{project.title}</h3>
                            <p className="projectDescription">{project.description}</p>
                            <div className="projectLinks">
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="projectLink">GitHub</a>
                                <a href={project.linkedinLink} target="_blank" rel="noopener noreferrer" className="projectLink">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {projects.length > 3 && (
                <button 
                    className="workBtn" 
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? 'Show Less' : 'See More'}
                </button>
            )}
        </section>
    );
}

export default Projects;