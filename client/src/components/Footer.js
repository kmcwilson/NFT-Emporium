import React from 'react';
import './Footerstyles'
 import { FaGithub } from 'react-icons/fa'
 import { FaLinkedin } from "react-icons/fa"
 import { FaMailBulk } from "react-icons/fa"
 import { Link } from 'react-router-dom'


  const Footer = () => {
    return (
     
       <><div className='footer'>
        <h1> Heela Qayumie</h1>
      
        <a href="https://github.com/hqayumie" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="www.linkedin.com/in/heela-qayumie-8604b6226" target="blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="mailto:heelaqayumie@gmail.com" target="_blank" rel="noopener noreferrer"><FaMailBulk /></a>
      </div>
      <div className='footer'>
          <h1> Katie Wilson</h1>
       
          <a href="https://github.com/hqayumie" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="www.linkedin.com/in/heela-qayumie-8604b6226" target="blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:heelaqayumie@gmail.com" target="_blank" rel="noopener noreferrer"><FaMailBulk /></a>
          </div>
          <div className='footer'>
          <h1> Ryan Park</h1>
         
          <a href="https://github.com/hqayumie" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="www.linkedin.com/in/heela-qayumie-8604b6226" target="blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:heelaqayumie@gmail.com" target="_blank" rel="noopener noreferrer"><FaMailBulk /></a>



        </div></>
        
)
}
        

export default Footer;