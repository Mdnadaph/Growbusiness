import React from 'react';
import {NavLink} from "react-router-dom";

const Common = (props) => {
  return (
    <>
    <section id='header' className='d-flax align-items-center '>
    
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-10 mx-auto'>
            <div className="row">
            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
            <h1 className='main_h1'>
                {props.name} <strong className='brand_name'>Md Yusuf Nadaph</strong>
            </h1>
            <h2 className='my-3 text1 '>
                We are the team of talented developer making websites
            </h2>
            <div className='btn1'>
                <NavLink to={props.visit} className='btn'>{props.btname}</NavLink>
            </div>
            </div>   
                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                    <img src={props.imgsrc} className='img-fluid animated ' alt="home photo" />
                </div>        
            </div>
        </div>
        </div>
    </div>
    </section>  
   
    </>
  )
}

export default Common
