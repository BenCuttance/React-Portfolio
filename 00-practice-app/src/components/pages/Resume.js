import React from 'react';

const frontEndSkills = [
  { frontEnd: "HTML (Hypertext Markup Language)" },
  { frontEnd: "CSS (Cascading Style Sheets)" },
  { frontEnd: "JavaScript" },
  { frontEnd: "React" },
  { frontEnd: "Webpack" },
]

const backEndSkills = [
  { BackEnd: "Node.js" },
  { BackEnd: "MySQK" },
  { BackEnd: "MongoDB" },
  { BackEnd: "Express,js" },
  { BackEnd: 'Restful API\'s' },
  { BackEnd: 'OAuth' },
]

function FrontEnd({ skills }) {
  return (
    <ul>
      <li>
        {skills.frontEnd}
      </li>
    </ul>
  )
}

function BackEnd({ skills }) {
  return (
    <ul>
      <li>
        {skills.BackEnd}
      </li>
    </ul>
  )
}

const resumeFile = 'http://localhost:3000/#resume/resumeFile_pdf.pdf'


export default function Resume() {
  const downloadFileAtURL = (url) => {
    fetch(url).then(response => response.blob().then(blob => {
      const blobURL = window.URL.createObjectURL(new Blob([blob]))
      const aTag = document.createElement('a')
      aTag.href = blobURL

      aTag.setAttribute('download', 'resumeFile_pdf.pdf')
      document.body.appendChild(aTag)
      aTag.click()
      aTag.remove();

    }))


  }

  return (
    <div style={{paddingBottom:'50px'}}>
      <h1 className='pageTitle'>Resume</h1>
      <div className="card card text-bg-light mb-3 card-body" style={{ margin: '20px' }}>
        <h2 className="card-title" style={{ lineHeight: '2' }}>Skill set</h2>
        <h6>Download my <a onClick={() => { downloadFileAtURL(resumeFile) }} href='#resume' >resume here</a>
        </h6>
        <h5> Course Work </h5>
        <ul>
          <li>Front-end Development </li>

          {frontEndSkills.map((skills, index) => {
            return <FrontEnd skills={skills} key={index}></FrontEnd>
          })}

          <li>
            Back-end Development
          </li>

          {backEndSkills.map((skills, index) => {
            return <BackEnd skills={skills} key={index}></BackEnd>
          })}
        </ul>


        <li >Other</li>
        <ul>
          <li>
            Agile management
          </li>
          <li>
            Deployment and usage of GitHub & Heroku
          </li>
        </ul>

      </div>
    </div>
  );
}