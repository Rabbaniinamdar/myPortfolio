import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import '../CSS/Skills.css'
const skillsData = [
    { name: 'HTML', per: 90, color: "#e34c26" },
    { name: 'CSS', per: 80, color: "#264de4" },
    { name: 'JavaScript', per: 70, color: "#F0DB4F" },
    { name: 'React.js', per: 60, color: "#61dbfb" },
    { name: 'Java', per: 90, color: "#f89820" },
    { name: 'Node.js', per: 60, color: "#3C873A" },
    { name: 'Express.js', per: 60, color: "#808080" },
    { name: 'MySQL', per: 80, color: "#00758F" },
    { name: 'GitHub', per: 70, color: "#171515" },
    { name: 'Postman', per: 50, color: "#f36819" },

];

const Skills = () => {
    return (
        <div>
            <section className="portfolio" id="portfolio">
                <h1 className="heading">My <span>Skills</span></h1>
                {skillsData.map((skill, index) => (
                    <div class="skills_bar">
                        <div key={index} className="box">
                            <h1 className='skill' style={{ color: `${skill.color}` }}>{skill.name}</h1>
                            <ProgressBar
                                completed={skill.per}
                                label={`${skill.per}%`}
                                bgColor={skill.color}
                                baseBgColor="Purple"
                            />
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Skills;
