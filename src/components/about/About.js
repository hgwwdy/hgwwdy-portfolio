import React from 'react'
import NavBar from '../navbar/Nav'
import './About.css'
import TechStack from '../techStack/techStack'
import h5 from '../assets/h5.jpg'
import Footer from '../footer/footer'
const About = () => {
  return (
    <>
    <div>
      <NavBar />
       <div className="About py-10 ">
     <h3 className='text-center  aboutme '>Who I AM </h3>
        <div className='container-sm '>
           <p className=' text-center my-3'>
          I'm  a 17-year-old front end developer passionate about creating functional and responsive websites and a tech
          enthusiast in general. I have been fascinated about technology and development at a young age and this curiosity 
          had led me to start learning HTML ,css and javascript and I quickly fell in love with the process of bringing
          ideas to life on the web.Over the past year, I have developed a strong foundation in front end development through consistency and dedication along with school. I have excellent cloning  , developing  skills and clean coding practices .
          <br/><br/>
          In the short term , I aim to become  a full-stack developer and work on various innovative projects that make a difference.
          I am excited about the future and the endless possibiities in the tech industry.
        </p>
        </div   >

        <div className='hero-container2'>
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
      
    </div>
    <br />
    <section>
      <Footer />
    </section>
    </>
  )
}

export default About;
