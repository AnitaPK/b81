import React from 'react'
import imgOne from '../assets/AshaOneImg.jpeg'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className="container-fluid" style={{height:"500px"}}>
    <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={imgOne} className="d-block customImg" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={imgOne} className="d-block customImg" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Asha_Bhosle.jpg/250px-Asha_Bhosle.jpg" className="d-block customImg" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  )
}

export default HeroSection