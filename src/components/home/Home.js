import React from 'react'
import NavBar from '../navbar/Nav'
import './Home.css'
import h2 from '../assets/h2.jpg';
import h5 from '../assets/h5.jpg'
import { NavLink } from 'react-router-dom';
import TechStack from '../techStack/techStack';
import ProjComponent from '../projects/projComponent'
import ConComp from '../contact/con-comp';


const handleDownload = () => {
  // Create an anchor element
  const anchor = document.createElement('a');
  anchor.href = "https://drive.google.com/uc?export=download&id=1p2R7nHgwhZmYY8U26jWDbvOebs1JPd7_";
  anchor.download = "hibstCV.pdf"; //
  
  // Programmatically trigger the click event on the anchor element
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

const Home = () => {
  

  return (
    <>
    <div className='all' style={{height:'100vh'}}>
      <nav>
      <NavBar/><hr style={{color:"white"}}/>
      </nav>
     
      <div className='hero-container'>
        {/*left side*/}
        <section className="left-side">
          <div>
            <h4 className='hello'>Hello, I'm <br/> <span className='h-name'>Hibst</span> <span className='g-name'>Getachew</span><br /> </h4>
            <div className="typing-container">
              <p className="typing-text">A Front-End Developer</p>
            </div><br />
            <button className='h-work download-cv-button'onClick={handleDownload}>
               <a href="https://drive.google.com/uc?export=download&id=1p2R7nHgwhZmYY8U26jWDbvOebs1JPd7_" className="download-cv-button"download></a>
             Download CV </button> 
           

            <button className='h-contact'><NavLink  
               className="nav-link" 
                to="/contact" 
                activeClassName="active">Contact Info </NavLink></button>
                
          </div>

        </section>

        {/*right side*/}
        <section className=" text-center right-side">
         <div className='border-frame py-4 my-5'>
         <img src={h2}alt="" className="hib-img "/>
         
         <div className=' additions '>
          <button className='my-2 text-start '> <span className='plus me-1'>+</span>Attention To Detail</button>
          <button className='my-2 text-start'> <span className='plus me-1'>+</span> Team Player</button>
          <button className='my-2 text-start '> <span className='plus me-1'>+</span> Clean Code</button>
         </div>
         </div>
        </section>
        
      </div>
      <div className='empt' style={{height:'9rem'}}></div>
       </div>



       <div className="About py-10 ">
     <h3 className='text-center  aboutme '>Who I AM </h3>
        <div className='container-sm '>
           <p className=' text-center my-3'>
          I'm  a 17-year-old front end developer passionate about creating functional and responsive websites and a tech
          enthusiast in general. I have been fascinated about technology and development at a young age and this curiosity 
          had led me to start learning html ,css and javascript and I quickly fell in love with the process of bringing
          ideas to life on the web. Over the past year, I have developed a strong foundation in front end development through consistency and dedication along with school. I have excellent cloning  , developing  skills and clean coding practices .
          <br/><br/>
          In the short term , I aim to become  a full-stack developer and work on various innovative projects that make a difference.
          I am excited about the future and the endless possibiities in the tech industry.
        </p>
        </div   >

        <div className='hero-container2 '>
           <img src={h5} alt="" className='img-hib2  center-image ' />
        <div className="row specfics">
           <div className="col-6 my-7 mx-9 ">
            <h4>Name</h4>
            <p>Hibst Getachew</p>
            <br />
            <br />
          <h4>Employment</h4>
            <p>Open</p>
           </div>

           <div className="col-6 my-7 mx-9 spec2 ">
            <h4>Education</h4>
            <p>Icog-Acc & self taught</p>
            <br />
            <br />
            <h4 className='mail'>Email</h4>
            <a href='mailto:hibstgetachew5@gmail.com'> hibstgetachew5@gmail.com</a>
            </div>
        </div>
       </div>
       </div>
       <section className='tech-stack'>
          <TechStack />
       </section>

      <section>
      <ProjComponent />
       </section>
       <section>
       <ConComp />
       </section>
     </>
  )
}

export default Home
