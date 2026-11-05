
import React from 'react'
import { CiStar } from 'react-icons/ci'

function View() {
  return (
    <div className='container my-5'>
      <div style={{height:'80vh'}} className='row'>
        <div className='col-lg-6 text-center'>
         <img className='img-fluid w-50' src="https://m.media-amazon.com/images/I/51Y0eeQykEL._AC_UF1000,1000_QL80_.jpg" alt="no image" />
         <div className='d-flex justify-content-evenly mt-5'>
          <button className='btn btn-success'>ADD TO WISHLIST</button>
          <button className='btn btn-warning'>ADD TO CART</button>
         </div>
        </div>
        <div className='col-lg-6 fw-bold'>
            <h3 className='fw-bold'>Title</h3>
            <h2 className='fw-bold'>$ 30</h2>
            <h4 className='fw-bold'>Brand :</h4>
            <h4 className='fw-bold'>Category : </h4>
            <h4 className='fw-bold'>Description : </h4>
            <h5 className='fw-bold'>Client Reviews</h5>
            <div className='border rounded shadow p-2 my-5'>
             <p><span className='fw-bolder'>Name : </span> Message</p>
             <p>Rating : 5 <CiStar className='text-warning fs-4 fw-bold'/> </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default View
