import React from 'react'
import { RiCloseLargeFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'


function Cart() {
  return (
   <>
      <Header />
      <div style={{height : "80vh"}} className='container my-5 '>
        <h1 className='pt-5 text-primary fw-bold'>User's Cart</h1>
        <div className='row'>
          <div className="col-lg-8 border shadow">
            <table className='table'>
              <thead>
                 <tr>
                   <th>#</th>
                   <th>Product</th>
                   <th>Image</th>
                   <th>Quantity</th>
                   <th>Price</th>
                   <th>...</th>
                 </tr>
              </thead>
              <tbody>
                   <tr>
                      <td>1</td>
                      <td>Sunscreen</td>
                      <td><img style={{height : '80px'}} variant = "top" src="https://www.bbassets.com/media/uploads/p/l/40332085_1-aqualogica-glow-dewy-sunscreen-spf-50-pa.jpg" alt="sunscreen" /></td>
                      <td>
                        <div className='d-flex '>
                          <button className='btn fs-4'>-</button>
                          <input style={{width : "40px"}} type="text" className='form-control' readOnly/>
                          <button className='btn fs-4'>+</button>
                        </div>
                      </td>
                      <td>$30</td>
                      <td><button className='btn text-danger fw-bold'><RiCloseLargeFill /></button></td>
                   </tr>
              </tbody>
            </table>
            <div className='float-end p-3'>
              <button className='btn btn-danger text-light me-3'>EMPTY CART</button>
              <Link to={'/'} className='btn btn-info text-light'>SHOP MORE</Link>
            </div>
          </div>
          <div className="col-lg-4">
             <div className='border shadow p-5 rounded text-center                                    '>
              <h3>Total Amount : <span className='text-danger'>$300</span></h3>
              <hr />
              <button className='btn btn-success w-100'>CHECKOUT</button>
             </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default Cart
