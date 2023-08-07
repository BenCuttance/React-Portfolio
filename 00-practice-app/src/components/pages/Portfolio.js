import React from 'react';
import placeholder from '../../images/comingSoonish.jpg'
import NodeJS from '../../images/nodeJS.jpg'
import javaScript from '../../images/JavaScript.png'
import projectInventory from '../../images/projectInventory.PNG'
import readMe from '../../images/ReadMe.png'
import googleMaps from '../../images/googleMaps.avif'


const projects = [
{title: 'Group Project Three - Coming Soon (Different Link currently in use)', img: placeholder, link: 'https://github.com/BenCuttance/TechBlog-Wk14'}, 
{title: 'Project Inventory - Group Project Two', img: projectInventory, link: 'https://github.com/retnodamayanti/Project_Inventory'},
{title: 'Virtual Adventures - Project One', img: googleMaps, link: 'https://github.com/robinsonfdossantos/Virtual_Adventures'},
{title: 'Note Taker', img: NodeJS, link: 'https://github.com/BenCuttance/Note_Taker_Challenge'},
{title: 'Read Me Generator', img: readMe, link: 'https://github.com/BenCuttance/ReadMe_Generator'},
{title: 'Password Generator', img: javaScript, link: 'https://github.com/BenCuttance/Password-Generator'},
]


function Project ({project}) {
return (
  <article className='projectContainer'>
    <h6>{project.title}</h6>
    <a href={project.link}>
    <img className="projectImg roundedEdges" style={{border:'2px solid black'}} src={project.img}  alt='text'></img>
    </a>
  </article>
)
}
export default function Portfolio() {
  return (



    <section className='projectSection' >
      <h2 style={{color:'White'}}>Portfolio</h2>

      <div className="card mb-5 card-body" >
      <div className='image-grid  '>
       
       {projects.map((project, index)=>{
        return <Project project = {project} key={index}></Project>
       })}
       </div>
      </div>
    </section>


  );
}
