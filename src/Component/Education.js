import React from 'react';
import { FaUserGraduate } from "react-icons/fa6";
import '../CSS/Education.css'
const Education = () => {
  return (
    <section className="education" id="education">
      <h1 className="heading">My <span>Education</span></h1>

      <div className="box-container">
        <div className="box">
          <i className="fas fa-graduation-cap" style={{ top: '-2.4rem' }}><FaUserGraduate /></i>
          <span>2017</span>
          <h3>SSLC</h3>
          <p>Basavateerth Vidyapeetha High School Dubalgundi<br />
            Grade: 82.5%</p>
        </div>  

        <div className="box">
          <i className="fas fa-graduation-cap"><FaUserGraduate /></i>
          <span>2017-2019</span>
          <h3>PUC</h3>
          <p>Bhagat Singh PU Science College Humnabad<br />
            Field: Science<br />
            Grade: 75.5%</p>
        </div>

        <div className="box">
          <i className="fas fa-graduation-cap"><FaUserGraduate /></i>
          <span>2019-2023</span>
          <h3>Engineering</h3>
          <p>Bheemanna Khandre Institute of Technology Bhalki<br />
            Branch: CSE<br />
            Final Grade: 8.25 CGPA</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
