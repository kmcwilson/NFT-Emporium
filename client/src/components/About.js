import React from 'react';
import '../App.css';
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import './About.css'
import { Card } from '@mui/material';


const data = [
  {
    id: 1,
    image: '/images/IMG1.jpg',
    title: 'Heela Qayumie',
    desc: 'Future full stack web developer leveraging a background in finance, communications and political science to provide unique perspectives on how end-users can interact with websites and software platforms. I have bachelor of Arts majoring in both Political Science and Communications from Carleton University. I am currently working in finance as an Investment Specialist Associate. My strengths lie in teamwork, creativity, and attention to detail. I am a naturally curious person with a passion for learning and a hard worker who does not take life too seriously. ',
    github: 'https://github.com/hqayumie',
    linkedIn: 'https://www.linkedin.com/in/heela-qayumie-8604b6226/'
  },

  {
  id: 1,
    image: '/images/IMG1.jpg',
    title: 'Heela Qayumie',
    desc: 'Future full stack web developer leveraging a background in finance, communications and political science to provide unique perspectives on how end-users can interact with websites and software platforms. I have bachelor of Arts majoring in both Political Science and Communications from Carleton University. I am currently working in finance as an Investment Specialist Associate. My strengths lie in teamwork, creativity, and attention to detail. I am a naturally curious person with a passion for learning and a hard worker who does not take life too seriously. ',
    github: 'https://github.com/hqayumie',
    linkedIn: 'https://www.linkedin.com/in/heela-qayumie-8604b6226/'
  },
{
  id: 1,
  image: '/images/IMG1.jpg',
  title: 'Heela Qayumie',
  desc: 'Future full stack web developer leveraging a background in finance, communications and political science to provide unique perspectives on how end-users can interact with websites and software platforms. I have bachelor of Arts majoring in both Political Science and Communications from Carleton University. I am currently working in finance as an Investment Specialist Associate. My strengths lie in teamwork, creativity, and attention to detail. I am a naturally curious person with a passion for learning and a hard worker who does not take life too seriously. ',
  github: 'https://github.com/hqayumie',
  linkedIn: 'https://www.linkedin.com/in/heela-qayumie-8604b6226/'
}
  // {
  //   id:2,
  //   image:,
  //   desc:
  //   github:
  //   linkedIn:
  // },

  // {
  //   id:3,
  //   image:,
  //   desc:
  //   github:
  //   linkedIn:
  // },

]
const About = () => {
  return (
    <section id='about'>
      <h2>About Us</h2>
      <Card>

      <div className="container about__container">
        {
          data.map(({ id, image, title, desc, github, linkedIn }) => {
            return (
            
              <article key={id} className='about__item'>
                <div className="about__item-image">
                  <img src={image} alt={title} height='100px' width= '100px' className='float-left'/>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noopener noreferrer" ><FaGithub />Github</a>
                  <a href={linkedIn} className='btn btn-primary' target='_blank' rel="noopener noreferrer"><FaLinkedin />linkedIn</a>
                </div>
              </article>
              
            )
          })
        }
      </div>
      </Card>
    </section>
  )
}

 export default About;