import React, { useEffect, useState } from 'react'
import { RiCloseLargeFill } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeCartItem, incrementCart, decrementCart, emptyCart } from '../Redux/Slices/cartSlice'
import Swal from 'sweetalert2'



function Cart() {
  const dispatch = useDispatch()
  const userCart = useSelector(state => state.CartReducer)
  const [cartTotal, setCartTotal] = useState(0)
  const navigate = useNavigate()


  useEffect(() => {
     setCartTotal(userCart?.reduce((acc,curr) => acc + curr.totalPrice, 0))
  },[userCart])

  const handleDecrementCart = (product) => {
    if(product.quantity > 1){
      dispatch(decrementCart(product.id))
    }else{
      dispatch(removeCartItem(product.id))
    }

  }
  const handleCheckout = () => {
    dispatch(emptyCart())
    Swal.fire({
      title  :  "Order placed successfully",
      text : "Thank you for shopping with us",
      icon : "success",
      confirmButtonText : "ok"
    })
    navigate('/')
  }

  return (
   <>
      
      <Header />
      {
        userCart.length > 0 ?
        <div  className='container my-5 '>
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
                  {
                    userCart.map((item, index) => (
                       <tr key={item?.id}>
                      <td>{index+1}</td>
                      <td>{item?.title}</td>
                      <td><img style={{height : '80px'}} variant = "top" src={item?.thumbnail}  alt="sunscreen" /></td>
                      <td>
                        <div className='d-flex '>
                          <button onClick={() => handleDecrementCart(item)} className='btn fs-4'>-</button>
                          <input style={{width : "40px"}} value={item?.quantity} type="text" className='form-control' readOnly/>
                          <button onClick={() => dispatch(incrementCart(item?.id))} className='btn fs-4'>+</button>
                        </div>
                      </td>
                      <td>${item?.totalPrice}</td>
                      <td className='btn text-danger fw-bold' onClick={() => dispatch(removeCartItem(item?.id))} >X</td>  
                   </tr>
                    ))
                  }
              </tbody>
            </table>
            <div className='float-end p-3'>
              <button onClick={() => dispatch(emptyCart())} className='btn btn-danger text-light me-3'>EMPTY CART</button>
              <Link to={'/'} className='btn btn-info text-light'>SHOP MORE</Link>
            </div>
          </div>
          <div className="col-lg-4">
             <div className='border shadow p-5 rounded text-center                                    '>
              <h3>Total Amount : <span className='text-danger'>${cartTotal}</span></h3>
              <hr />
              <button onClick={handleCheckout} className='btn btn-success w-100'>CHECKOUT</button>
             </div>
          </div>
        </div>
      </div> 
      :
       <div className='d-flex justify-content-center align-items-center flex-column'>
                    <img className='img-fluid' src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="No image" />
                    <h1>Your Cart is empty</h1>
                    <Link to={'/'} className='btn btn-primary mb-5'>Add more</Link>
                  </div>
      }
      
   </>
  )
}

export default Cart
