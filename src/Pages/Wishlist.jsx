import React from 'react'
import { Card } from 'react-bootstrap'
import { FaCartPlus, FaHeartCircleXmark } from 'react-icons/fa6'
import Header from '../Components/Header'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



function Wishlist() {
  const userWishlist = useSelector(state => state.wishlistReducer)

  return (
    <>
      <Header />
      <div className='container my-5'>
        {
          userWishlist?.length > 0 ?
            <>
              <h1 className='pt-5 text-primary fw-bold'>User's Wishlist</h1>
              <div className="row pt-3">
                {/* Duplicate column according to products */}

               { 
               userWishlist.map(item => (
                  <div className="col-lg-3 my-2">
                  {/* cards */}
                  <Card className='shadow p-2'>
                    <Card.Img style={{ height: "250px" }} variant="top" src={item?.thumbnail} />
                    <Card.Body className='text-center'>
                      <Card.Title>{item?.title}</Card.Title>
                      <div className='d-flex justify-content-evenly'>
                        <button className='btn text-danger fw-bold fs-3'><FaHeartCircleXmark /></button>
                        <button className='btn text-success fw-bold fs-3'><FaCartPlus /></button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
                ))
                }
              </div>
            </>

            :
            <div className='d-flex justify-content-center align-items-center flex-column'>
              <img className='img-fluid' src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="No image" />
              <h1>Your wishlist is empty</h1>
              <Link to={'/'} className='btn btn-primary'>Add more</Link>
            </div>
            
        }
      </div>
    </>
  )
}

export default Wishlist
