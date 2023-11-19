import React from 'react'
import Profile from "../assets/home.jpg"
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import "./home.css"

const Home = () => {
  return (
    <section className='home section grid'>
      <img src={Profile} alt="" className='home__img' />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Dolly Kamboj</span> Frontend Developer
          </h1>

          <p className="home__description"> 
            I am a front-end developer with experience in building responsive and interactive websites using HTML, CSS, JavaScript, ReactJS, Redux.
          </p>
          <Link to="/about" className="button">
            More About Me <span className="button__icon">
              <FaArrowRight/>
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  )
}

export default Home
