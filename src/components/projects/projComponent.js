import React from 'react'
import betonImage from '../assets/beton.jpg'
import asesaImage from '../assets/asesa.jpg'
import calcImage from '../assets/calc.jpg'
import instaImage from '../assets/insta.jpg'
import formImage from '../assets/form.jpg'
import './Projects.css'

const projComponent = () => {
  return (
    <>   
    <div className='proj-title text-center'>
         <h3 >Projects</h3>
    </div>

    <div className='row gallery' style={{width:'80vw'}}>
      <div className="card col-md-4 c-card" style={{width: "18rem",height:"25rem"}}>
  <img src={betonImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Beton Real Estate</h5>
    <p className="card-text">A demo real estate website made with <span>React</span> and <span >Css</span>.</p>
    <a href="https://realestates-beton.netlify.app" className="btn btn-primary">View Project</a>
      <a href="https://github.com/hgwwdy/A-React-RealEstate-demo-website.git " className="btn btn-primary" style={{backgroundColor:'grey'}}>View Code</a>
  </div>
</div>

      <div className="card col-md-3 c-card" style={{width: "20rem",height:"25rem"}}>
  <img src={asesaImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Asesa Tours</h5>
    <p className="card-text">A demo tours website made with <span>Bootstrap</span>.</p>
    <a href="https://asesa-tours.netlify.app" className="btn btn-primary">View Project</a>
    <a href=" https://github.com/hgwwdy/A-Bootstrap-tours-website.git" className="btn  btn-primary"style={{backgroundColor:'grey'}}>View Code</a>
  </div>
</div>
          <div className="card col-md-3 c-card" style={{width: "20rem",height:"25rem"}}>
  <img src={calcImage} className="card-img-top" style={{height:"10rem" , width:'16rem',marginLeft:'1.5rem'}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Calculator</h5>
    <p className="card-text">A simple calculator made with <span> javascript, Html</span> and <span >Css</span>.</p>
    <a href="https://calculator-hgwwdy.netlify.app" className="btn btn-primary">View Project</a>
     <a href="https://github.com/hgwwdy/A-simple-html-css-js-calculator.git " className="btn  btn-primary"style={{backgroundColor:'grey'}}>View Code</a>
  </div>
</div>
       <div className="card col-md-3 c-card" style={{width: "20rem",height:"25rem"}}>
  <img src={instaImage} className="card-img-top"  alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Instagram Clone</h5>
    <p className="card-text">A replica of instagram made with <span> Html </span> and <span>Css</span>.</p>
    <a href="hlinsta-clone-hgwwdy.netlify.app" className="btn btn-primary">View Project</a>
     <a href="https://github.com/hgwwdy/Instagram-design-clone-by-html-and-css.git" className="btn btn-primary"style={{backgroundColor:'grey'}}>View Code</a>
  </div>
</div>

  <div className="card col-md-3 c-card" style={{width: "20rem",height:"25rem"}}>
  <img src={formImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">3D form </h5>
    <p className="card-text">A static magestic 3D form made with <span>Html </span>  and  <span>Scss</span>.</p>
    <a href=" https://3d-form-hgwwdy.netlify.app" className="btn btn-primary">View Project</a>
      <a href="https://github.com/hgwwdy/static-scss-3d-form-design.git" className="btn btn-primary"style={{backgroundColor:'grey'}}>View Code</a>
  </div>
</div>
    </div>
    <hr className='end'></hr>
    </>
  )
}

export default projComponent
