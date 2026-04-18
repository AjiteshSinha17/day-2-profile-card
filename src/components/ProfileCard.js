import React from "react";

function ProfileCard() {
    return (
        <div className="profile-card">
            <h2 className="name">Ajitesh Sinha</h2>
            <p className="role">Flutter & App Developer</p>

            <img
                src="/images/profile.jpg"
                alt="profile"
                className="profile-img"
            />

            <p className="email">ajiteshsinha2004@gmail.com</p>
            <p>India</p>

            <div className="socials">
                <a href="https://github.com/AjiteshSinha17" target="_blank" rel="noreferrer">
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/ajitesh-sinha-501124295/" target="_blank" rel="noreferrer">
                    LinkedIn
                </a>
            </div>

            <button className="hire-btn">Hire Me</button>
        </div>
    );
}

export default ProfileCard;