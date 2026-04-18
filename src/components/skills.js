import React from "react";

function Skills() {
    const skillsData = [
        { id: 1, name: "Flutter", proficiency: 89, icon: "📱" },
        { id: 2, name: "Dart", proficiency: 90, icon: "🎯" },
        { id: 3, name: "Python", proficiency: 85, icon: "🐍" },
        { id: 4, name: "Firebase", proficiency: 88, icon: "🔥" },
        { id: 5, name: "C++", proficiency: 82, icon: "⚙️" },
        { id: 6, name: "Git", proficiency: 89, icon: "🔗" },
        { id: 7, name: "Android", proficiency: 88, icon: "🤖" },
        { id: 8, name: "iOS", proficiency: 82, icon: "🍎" },
        { id: 9, name: "CI/CD", proficiency: 80, icon: "⚡" },
        { id: 10, name: "Docker", proficiency: 78, icon: "🐳" },
        { id: 11, name: "MySQL", proficiency: 76, icon: "🗄️" },
        { id: 12, name: "REST API", proficiency: 88, icon: "🌐" },
    ];

    return (
        <div className="skills">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-container">
                {skillsData.map((skill) => (
                    <div key={skill.id} className="skill-card">
                        <div className="skill-icon">{skill.icon}</div>
                        <h3 className="skill-name">{skill.name}</h3>
                        <div className="skill-proficiency">
                            <div className="skill-bar">
                                <div 
                                    className="skill-progress" 
                                    style={{ width: `${skill.proficiency}%` }}
                                ></div>
                            </div>
                            <p className="skill-percentage">Proficiency: {skill.proficiency}%</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
