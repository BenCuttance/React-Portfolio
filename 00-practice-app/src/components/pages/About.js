import React from 'react';
import Journey from '../../images/Journey.PNG'

// About Page

export default function About() {
  return (
    <div  >
      <h2 className="pageTitle" >About Me</h2>
      <div className="card card text-bg-light mb-3 card-body" style={{ margin: '20px' }}>
        <p className="card-text" style={{ lineHeight: '2' }}>
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

      </div>
      <h4 className='pageTitle'>More About me...</h4>
      <div className="card text-bg-light mb-3 card-body mapContainer" style={{ margin: '20px' }}>
        <div>
          <p>Some of my interests outside of work include:</p>
          <ul >
            <li>Tennis</li>
            <li>Traveling</li>
            <li>Reading</li>
            <li>Food</li>
            <li>Gaming</li>
          </ul>
        </div>
        <div className='mapContainer'>
          <p> My next planned journey:  Scotland -> England -> Iceland -> Germany -> Switzerland -> Slovenia -> Austria -> Poland -> Czechia -> Back Home'''
            <img className=" map roundedEdges" style={{ border: '2px solid black' }} src={Journey} alt='text'></img>
          </p>
        </div>
      </div>

    </div>
  );
}

