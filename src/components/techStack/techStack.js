import React from 'react';
import './techStack.css'
const techStack =[
  {name: 'HTML', icon:'fa-brands fa-html5'},
  {name: 'Css', icon:'fa-brands fa-css3-alt'},
  {name: 'Scss', icon:'fa-brands fa-sass'},
  {name: 'Javascript', icon:'fa-brands fa-js'},
  {name: 'React', icon:'fa-brands fa-react'},
  {name: 'Bootstrap', icon:'fa-brands fa-bootstrap'},
  {name: 'Git', icon:'fa-brands fa-git-alt'}
];
const TechStack = () =>{
  return(
    <div>
    <div className="stack-container">
      <div className="stack">
        {techStack.map((tech, index) => (
          <div key={index} className="item">
            <i className={tech.icon} style={{ fontSize: '3.5em', marginBottom: '10px' }}></i>
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TechStack;