import React from "react";

function Projects() {
    const projects = [
        {
            name: "SOS 42",
            img: "/images/sos42.jpg",
        },
        {
            name: "College Jone",
            img: "/images/college-jone.png",
        },
        {
            name: "Gold Scheme App",
            img: "/images/gold-scheme.png",
        },
        {
            name: "Lelam Online Car Invest",
            img: "/images/lelam-car.png",
        },
    ];

    return (
        <div className="projects">
            <h2>My Projects</h2>

            <div className="project-grid">
                {projects.map((proj, index) => (
                    <div key={index} className="project-card">
                        <img src={proj.img} alt={proj.name} />
                        <h3>{proj.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;