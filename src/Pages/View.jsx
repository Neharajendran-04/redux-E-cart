
import React, { useState, useEffect } from 'react'
import { CiStar } from 'react-icons/ci'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { addToWishlist } from '../Redux/Slices/wishListSlice'

function View() {
  const dispatch = useDispatch()
  const [product, setProduct] = useState({})
  const {id} = useParams()
  console.log(id);
  const {allProducts }= useSelector(state => state.productReducer)
  const userWishlist = useSelector(state  => state.wishlistReducer)
  useEffect(() => {
      setProduct(allProducts.find(product => product.id == id))
  }, [])
  console.log(product)

  const handleWishlist = () => {
    // check the product already in the wishlist
    const existingItem = userWishlist?.find(item => item.id == product.id)
    if(existingItem){
       Swal.fire({
        title:"Sorry",
        text:"Product already in your wishlist",
        icon:"error",
        confirmButtonText:"ok"
       })
    }else{
      dispatch(addToWishlist(product))
    }
  }
  
  return (
   <>
       <Header />
      <div className='container my-5 '>
        <div style={{height:'100vh'}} className='row'>
          <div className='col-lg-6 text-center'>
           <img className='img-fluid w-50' src={product?.thumbnail} alt="no image" />
           <div className='d-flex justify-content-evenly mt-5'>
            <button onClick={handleWishlist} className='btn btn-success'>ADD TO WISHLIST</button>
            <button className='btn btn-warning'>ADD TO CART</button>
           </div>
          </div>
          <div className='col-lg-6 fw-bold'>
              <h3 className='fw-bold'>{product?.title}</h3>
              <h2 className='fw-bold'>$ {product?.price}</h2>
              <h4 className='fw-bold'>Brand : {product?.brand}</h4>
              <h4 className='fw-bold'>Category : {product?.category} </h4>
              <h4 className='fw-bold'>Description : {product?.description}</h4>
              <h5 className='fw-bold'>Client Reviews</h5>
              {
                product?.reviews?.map(review => (
                  <div className='border rounded shadow p-2 my-5'  key={review.id}>
               <p><span className='fw-bolder'>Name : {review?.reviewerName}</span> Message : {review?.comment}</p>
               <p>Rating : {review?.rating} <CiStar className='text-warning fs-4 fw-bold'/> </p>
              </div>
                ))
              }
          </div>
        </div>
      </div>
   </>
  )
}

export default View
