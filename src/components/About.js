import React from 'react'
import aboutImg from '../images/about.jpeg'
import Title from './Title'
const About = () => {
  return (
    <section className="section" id="about">
      <Title title='His' subTitle='Invite'/>

    <div className="section-center about-center">
      <div className="about-img">
        <img
          src={aboutImg}
          className="about-photo"
          alt="awesome beach"
        />
      </div>
      <article className="about-info">
        <h3>Be the solution to this Generation</h3>
        <p>
          Want to have insight on how to be the difference in this Generation?
        </p>
        <p>
          Want to know how to be the light in this dark world? 
        </p>
        <a href="#about" className="btn">accept the invite?</a>
      </article>
    </div>
  </section>

  )
}

export default About

