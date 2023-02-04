import React from 'react';
import AboutCard from '../components/About';
import data from '../utils/data';

const About = () => {
  return (
    <div className="container about-page" style={{display:'flex', justifyContent: 'space-between',
    flexWrap: 'wrap'}}>
      {data.map(about =>
        (<AboutCard
        key={about.id}
        title={about.title}
        image={about.image}
        desc={about.desc}
        github={about.github}
        linkedin={about.linkedIn} />))}
        </div>
  )
}
export default About