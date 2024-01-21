import React from 'react'
import Card from './Card'
import Sdata from './Sdata'

const Service = () => {
  return (
    <>
      <div className='my-5'>
      <br />
        <h3 className='text-center text-primary fw-bold text2'>Our Services</h3>
      </div>
      <div className='container-fluid mb-5'>
        <div className='column'>
            <div className='col-10 mx-auto'>
                <div className="row gy-4">
                  {
                    Sdata.map((val, ind) =>{
                      return <Card
                      key={ind}
                      imgsrc={val.imgsrc}
                      title= {val.title}
                      />
                    })
                  }
                  
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Service
