import React from 'react'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
      <div className='my-5 mb-70'>
      <br />
        <h3 className='text-center text-primary fw-bold'>Make feel free to contact us</h3>
    
      </div>
      <div className='container contact-div '>
        <div className='row'>
          <div className='text-left col-md-6 col-10  mx-auto  fs-5'>
            <form>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label ">Full Name</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Address</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Write your address here"/>
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Phone</label>
              <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Type your Phone Number"/>
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="yourgaim@gmail.com"/>
            </div>

            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className='col-12'>
              <button className='btn btn-outline-primary' type='submit'>Submit</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
