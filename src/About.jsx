import React from 'react';
import Common from './Common';

const About = () => {
  return (
    <>
      <Common 
        name="Welcome to About page"
        imgsrc={"images/about.jpg"}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  )
}

export default About

