import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='bg-white text-black pt-5 pb-4 footer'>
        <div className='container text-center text-md-left'>
            <div className='row text-center text-md-left'>
                <div className='col-md-3  col-lg-3 col-xl-3 mx-auto mt-3'>
                    <h5 className='mb-4 fw-bold text-primary'>About Company</h5>
                    <p>It is a modular software platform designed 
                    towards small- and medium-sized businesses to 
                    help make their operations more intelligent and efficient. </p>
                </div>

                <div className='col-md-6 col-lg-2 col-xl-2 mx-auto mt-3'>
                    <h5 className='mb-4 fw-bold text-primary'>Products</h5>
                    <p>
                        <a href="#" className='text-black' style={{textDecoration:'none'}}>Software Development</a>
                    </p>
                    <p>
                        <a href="#" className='text-black' style={{textDecoration:'none'}}>Web Devlopment</a>
                    </p>
                    <p>
                        <a href="#" className='text-black' style={{textDecoration:'none'}}>Digital Marketing</a>
                    </p>
                    <p>
                        <a href="#" className='text-black' style={{textDecoration:'none'}}>Game Development</a>
                    </p>
                </div>

                <div className='col-md-6 col-lg-2 col-xl-2 mx-auto mt-3'>
                    <h5 className='mb-4 fw-bold text-primary'>Useful links</h5>
                    <p>
                        <NavLink to="/" className='text-black' style={{textDecoration:'none'}}>Home </NavLink>
                    </p>
                    <p>
                        <NavLink to="/about" className='text-black' style={{textDecoration:'none'}}>About</NavLink>
                    </p>
                    <p>
                        <NavLink to="/services" className='text-black'style={{textDecoration:'none'}}>Services</NavLink>
                    </p>
                    <p>
                        <NavLink to="/contact" className='text-black' style={{textDecoration:'none'}}>Contact Us</NavLink>
                    </p>
                </div>

                <div className='col-md-6 col-lg-2 col-xl-2 mx-auto mt-3'>
                    <h5 className='mb-4 fw-bold text-primary'>Contact Us</h5>
                    <p>
                        <i className='fas fa-home mr-3'>Kathamandu Nepal</i>
                    </p>
                    <p>
                        <i className='fas fa-envelope mr3'>mdyusuf6421@gmain.com</i>
                    </p>
                    <p>
                        <i className='fas fa-phone mr-3'>+97 9819823594</i>
                    </p>
                    <p>
                        <i className='fas fa-Print mr-3'>+01 7788855</i>
                    </p>
                    
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
