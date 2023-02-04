import React from 'react';
import '../App.css';
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'


const AboutCard = (props) => {
  const styles = {
    card: {
      backgroundImage: `url('../assets/${props.image}')`,
      height:'350px',
      width:'350px',
    },
  }
  return (
    <div className='card about-me' style={styles.card}>
      <div className='card-info'>
        <h5 className='card-title'>{props.title}</h5>
        <p className='card-text'>{props.desc}</p>
        <a href={props.github}><button className='card-text card-button'><FaGithub/></button></a>
        <a href={props.linkedin}><button className='card-text card-button'><FaLinkedin/></button></a>
        
      </div>
    </div>
  )
}

export default AboutCard