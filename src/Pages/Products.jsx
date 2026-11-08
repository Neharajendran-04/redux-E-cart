import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../Redux/Slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';


function Products() {

  const {loading, allProducts, error} = useSelector(state => state.productReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  },[])
  return (
    <div className='m-5'>
     {
      loading ? 
        <div className='text-center '> Loading...</div>
      :
       <div className="row pt-3">
        {/* Duplicate column according to products */}
       {
        allProducts.length > 0 ?
        allProducts.map(product => (
        
        <div key = {product?.id} className="col-3">
          {/* cards */}
          <Card className='shadow p-2'>
            <Card.Img style={{height : "250px"}} variant="top" src={product?.thumbnail} />
            <Card.Body className='text-center'>
              <Card.Title>{product?.title}</Card.Title>
               <Link to={`/products/:id`} className='btn btn-primary'>View More</Link>
            </Card.Body>
          </Card>
        </div>
    
        ))
      : 
      <div className='fw-bolder'>No products found</div>
       }
      </div>
     }
    </div>
  )
}

export default Products
