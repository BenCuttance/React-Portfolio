import React from 'react';
import placeholder from '../../images/react.jpg'
import styleSheet from '../../styles/style.css'

const projects = [
  {title: 'one', img: placeholder}, 
{title: 'two', img: placeholder},
{title: 'three', img: placeholder},
{title: 'four', img: placeholder},
{title: 'five', img: placeholder},
{title: 'six', img: placeholder},
{title: 'seven', img: placeholder},
]


function Project ({project}) {
return (
  <article className='projectContainer'>
    {project.title}
     <img className="projectImg" src={project.img} alt='text'></img>
  </article>
)
}
export default function Resume() {
  return (



    <section className='projectSection' >
      <h2 >Portfolio</h2>

      <div className='image-grid'>
        {/* <img className='image-grid-col-2 ' src={placeholder} alt='text'></img> */}
       {projects.map((project, index)=>{
        return <Project project = {project} key={index}></Project>
       })}
        {/* <img className='image-grid-col-2 ' src={placeholder} alt='text'></img> */}

      </div>
    </section>


  );
}
