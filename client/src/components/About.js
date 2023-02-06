import React from 'react';
import '../App.css';
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import './About.css'
import { Card, Button } from '@mui/material';


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
  title: 'Ryan Park',
  desc: 'Full stack web developer providing unique perspectives on how end-users interact with websites and software platforms. Earned a Full Stack Web Development certificate from Carleton University. Innovative problem-solver who is passionate about developing with a focus on design and development. Strengths in creativity, teamwork, and building projects from ideation to execution.',
  github: 'https://github.com/ryanparketh',
  linkedIn: 'https://www.linkedin.com/in/ryanparketh/'
}

]
const styles={
  buttonStyle: {
    backgroundColor: '#009B77', 
    margin: '10px'
},
cardStyle: {

}


}
const About = () => {
  return (
    <section id='about'>
      <h2 style={{padding: '30px', margin: '20px', textAlign: 'center', color:'whitesmoke'}}>About Us</h2>

      <div className="container about__container">
        {
          data.map(({ id, image, title, desc, github, linkedIn }) => {
            return (
            <Card key={id}>
              <article  className='about__item'>
                <div className="about__item-image">
                  <img src={image} alt={title} height='100px' width= '100px' className='float-left'/>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="portfolio__item-cta">
                 <Button style={styles.buttonStyle} > <a href={github} className='btn' target='_blank' rel="noopener noreferrer" ><FaGithub />Github</a></Button>
                 <Button style={styles.buttonStyle} > <a href={linkedIn} className='btn' target='_blank' rel="noopener noreferrer"><FaLinkedin />linkedIn</a></Button>
                </div>
              </article>
              </Card>
              
            )
          })
        }
      </div>
    </section>
  )
}

 export default About;