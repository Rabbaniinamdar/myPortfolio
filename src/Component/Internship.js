// import React from 'react';

// const Internship = () => {
//   return (
//     <section className="portfolio" id="internship">
//       <h1 className="heading">My <span>Internship</span></h1>

//       <div className="project-container">
//         <div className="project cert">
//           <h1>FrontEnd Developer</h1>
//           <a href="https://www.innovativeinfotech.com/default.aspx" target="_blank" rel="noopener noreferrer">
//             <h4>Innovative Technologies Hyderabad</h4>
//           </a>
//           <p>
//             Completed a highly competitive and intensive front-end developer internship with a focus on modern web development technologies and best practices. Gained hands-on experience in building responsive and user-friendly web applications using HTML, CSS, Bootstrap, and JavaScript.
//           </p>
//         </div>
//         <br />
//         <br />

//         <div className="project cert">
//           <h1>Java Full Stack Intern</h1>
//           <a href="https://www.kodnest.com/" target="_blank" rel="noopener noreferrer">
//             <h4>KodNest Bangalore</h4>
//           </a>
//           <p>
//             As a Java Full Stack Intern at Kodnest, I gained valuable experience working with a team of skilled developers on real-world projects. My responsibilities included developing and deploying full-stack applications using Java, JSP, and other modern technologies.
//           </p>
//         </div>
//         <br />
//       </div>
//     </section>
//   );
// };

// export default Internship;
import React from 'react'
import '../CSS/Internship.css'
export default function Internship() {
  return (
    <section className="portfolio" id="internship">
      <h1 className="heading">My <span>Internship</span></h1>
      <div class="container">
        <div class="card">
          <div class="box">
            <div class="content">
              <h1>FrontEnd Developer</h1>
              <h3>Innovative Technologies Hyderabad</h3>
              <p>
                Completed a highly competitive and intensive front-end developer internship with a focus on modern web development technologies and best practices. Gained hands-on experience in building responsive and user-friendly web applications using HTML, CSS, Bootstrap, and JavaScript.
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="box">
            <div class="content">
              <h1>Java Full Stack Intern</h1>
              <h3>KodNest Bangalore</h3>
              <p>As a Java Full Stack Intern at Kodnest, I gained valuable experience working with a team of skilled developers on real-world projects.
                My responsibilities included developing and deploying full-stack applications using Java, JSP, and other modern technologies.</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="box">
            <div class="content">
              <h1>Full Stack Developer Intern</h1>
              <h3>ExceLR Edtech Pvt Ltd</h3>
              <p>As a Full Stack Developer Intern at ExceLR Edtech Pvt Ltd, I worked on real-world application development.
                Responsibilities included project leadership, collaborative problem-solving, and seamless application deployment.
                Proficient in React, Java, Spring, Spting Boot, SQL and Restful API, I strengthened the team's technical capabilities.
                Successful project completions and positive feedback highlighted my commitment to quality,
                reflecting a transformative experience that deepened my technical expertise at ExceLR.</p>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
