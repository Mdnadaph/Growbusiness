import React from 'react';
import Common from './Common';
import about from  "../src/image/about.jpg";

const About = () => {
  return (
    <>
      <Common 
        name="Welcome to About page"
        imgsrc={about}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  )
}

export default About

