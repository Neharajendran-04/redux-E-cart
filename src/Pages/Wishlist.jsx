import React from 'react'
import { Card } from 'react-bootstrap'
import { FaCartPlus, FaHeartCircleXmark } from 'react-icons/fa6'



function Wishlist() {
  return (
    <div className='container my-5'>
      <h1 className='pt-5 text-primary fw-bold'>User's Wishlist</h1>
       <div className="row pt-3">
        {/* Duplicate column according to products */}
        <div className="col-3">
          {/* cards */}
          <Card className='shadow p-2'>
            <Card.Img style={{height : "250px"}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5zfSHaFjCVn8nNRnjGdH5x066TcdDHHQpgH64O2xCMnvbP7regOE-cX9a&s=10" />
            <Card.Body className='text-center'>
              <Card.Title>Sunscreen</Card.Title>
               <div className='d-flex justify-content-evenly'>
                  <button className='btn text-danger fw-bold fs-3'><FaHeartCircleXmark /></button>
                  <button className='btn text-success fw-bold fs-3'><FaCartPlus /></button>
               </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Wishlist
