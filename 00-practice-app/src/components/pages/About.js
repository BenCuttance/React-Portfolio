import React from 'react';
import bannerImg from '../../images/banner.jpg'
// import styleSheet from '../../s'



export default function About() {
  return (
    <div  >
   

      <div className="card card text-bg-light mb-3"  style={{maxWidth: '1900px'}}>
      
        <div className="card-body">
          <h2 className="card-title" style={{ lineHeight: '2' }}>About Me</h2>
          <p className="card-text" style={{ lineHeight: '1.5' }}>
            After gaining valuable experience as an ICU Nurse over the past three years, I am now seeking a new career path as a junior programmer.
            While my background in nursing has been fulfilling, I am looking forward to new start in technology and coding. In the following paragraph,
            I have listed my current experiences as an ICU Nurse and how they can effectively transfer into various roles outside the nursing field.

            As an ICU Nurse, I've been able to hone my clinical expertise, critical thinking, and multitasking skills while being able to provide compassionate care to critically ill patients.
            During my time in the ICU my role has allowed me to become proficient in monitoring vital signs, administering medications, and coordinating treatment plans with the
            healthcare team, which has improved my adaptability, emotional resilience, and attention to detail.
            Moreover, working with a variety of different professional within a interdisciplinary team such as physicians, and support staff has helped sharpen my ability to communicate
            effectively, listen actively, and contribute to achieve common goals.
            My experience working with a team has not only strengthened patient outcomes but also cultivated my skills in building strong professional relationships and resolving conflicts
            constructively. My time working in the ICU has left me with a diverse skill set, comprising clinical proficiency and teamwork, well-equipped to excel in various fields beyond
            nursing.</p>
          
          <div  style={{padding:'10px 10px  10px 0'}}>
            <h4 > More About Me:</h4>
            <h5> Course Work </h5>
            <p> 
            Alittle bit of this a little bit of that 
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

