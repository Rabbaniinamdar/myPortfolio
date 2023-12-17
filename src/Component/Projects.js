import React from 'react';
import ecommrec from '../images/ecommrec.png';
import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import project3 from '../images/project3.png';
import project4 from '../images/bkit.png';
import project5 from '../images/project5.png';
import project6 from '../images/project6.png';
import '../CSS/Projects.css';

const Projects = () => {
  const projects = [
    {
      name: 'Ecommerce Application',
      git: 'https://github.com/Rabbaniinamdar/E-Commerce.git',
      imageSrc: ecommrec,
      disc: ` Developed dynamic E-commerce app with a responsive design, skillfully blending HTML, CSS, JavaScript,
      React.js, Java, and MYSQL.
      • Enabled user-friendly shopping, product management for admins, and secure RESTful API communication.
      Achieved a seamless user experience on various devices.`
    },
    {
      name: 'Resturent Table Booking',
      git: "https://github.com/Rabbaniinamdar/InamdarDelights",
      link: 'https://rabbaniinamdar.github.io/InamdarDelights/',
      imageSrc: project1,
      disc: 'Created a restaurant table booking application using JavaScript, HTML, CSS, ReactJS, and MaerialUI, ensuring a responsive and user-friendly reservation system.'
    },
    {
      name: 'Hotel Menu and Booking Application',
      link: 'https://rabbaniinamdar.github.io/Ecommerce/',
      imageSrc: project2,
      disc: "Experience a seamless Hotel Menu and Booking App with HTML, CSS, JS, AJAX, and Bootstrap. Enjoy a responsive interface, dynamic updates, and appealing design for effortless travel planning and dining."
    },
    {
      name: 'Shooping Application',
      link: '',
      imageSrc: project3,
      disc: "Introducing our Shopping Application built with HTML, CSS, JS, ReactJS, and API integration. Enjoy a seamless and dynamic shopping experience with a responsive interface and real-time data updates."
    },
    {
      name: 'College Application',
      link: 'https://rabbaniinamdar.github.io/Bkit-Bhalki/',
      git: "https://github.com/Rabbaniinamdar/Bkit-Bhalki",
      imageSrc: project4,
      disc: "The Bkit College Application, developed with HTML, CSS, and JS, offers a user-friendly interface for seamless navigation, showcasing a blend of modern design and interactive functionalities."
    },
    {
      name: 'Text Converter',
      link: 'https://rabbaniinamdar.github.io/myapp/',
      git: "https://github.com/Rabbaniinamdar/myapp",
      imageSrc: project5,
      disc: "Designed a versatile Text Converter application using ReactJS, enabling users to convert text to upper/lowercase, copy to clipboard, remove extra spaces, and count words. Demonstrated strong UI/UX skills."
    },
    {
      name: 'News Application',
      link: 'https://github.com/Rabbaniinamdar/NewsMonkey.git',
      imageSrc: project6,
      disc: "Developed a dynamic News Application using ReactJS and News API. Implemented real-time news updates with a user-friendly interface, showcasing proficiency in ReactJS and API integration for current information delivery."
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h1 className="heading">
        My <span>Projects</span>
      </h1>
      <div className="box-container">
        {projects.map((project) => (
          <div className="box" key={project.name}>
            <img src={project.imageSrc} alt={project.name} />
            <div className="overlay-content">
              <div className='project-discription'>
                <h1>{project.name}</h1>
                <p>{project.disc}</p>
              </div>
              <div className='project_link'>
                <button><a href={project.git} target="_blank" rel="noopener noreferrer">Github</a></button>
                <button><a href={project.link} target="_blank" rel="noopener noreferrer">Go Live</a></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;