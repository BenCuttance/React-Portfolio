import React from 'react';

// const styles = {
//   pageBackGround: {
//     background: linear-gradient(to right, #434343 0%, black 100%);
//   }
// }

export default function About() {
  return (
    <div  >
      
      {/* <image>placeholder</image> */}

      <div className="card"  >
  <div className="card-body">
    <h2 className="card-title">About Me</h2>
    <p className="card-text">  After gaining valuable experience as an ICU Nurse over the past three years, I am now seeking a new career path as a junior programmer.
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
    
  </div>
</div>
    
      <footer className="position-absolute top-100 start-50 translate-middle">
      <a href="https://github.com/BenCuttance?tab=repositories"><img src="/images/github.png" alt="Github Link"></img> </a>
      <a href="https://www.linkedin.com/in/ben-cuttance-72618b286/"><img src="/images/github.png" alt="LinkedIn Link"></img> </a>
      </footer>
    </div>
  ); 
}

