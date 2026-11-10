import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../Redux/Slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Components/Header'
import { FaBackward, FaForward } from 'react-icons/fa';


function Products() {
  const {loading, allProducts, error} = useSelector(state => state.productReducer)
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 8
  const totalPages = Math.ceil(allProducts?.length/productsPerPage)
  const currentPageLastIndex = currentPage * productsPerPage
  const currentPageFirstIndex = currentPageLastIndex - productsPerPage
  const visibleProductArray = allProducts?.slice(currentPageFirstIndex, currentPageLastIndex) 
  useEffect(() => {
    dispatch(getAllProducts())
  },[])

  const navigateNextPage = () => {
    currentPage != totalPages && setCurrentPage(currentPage + 1)
  }
   const navigatePrevPage = () => {
    currentPage != 1 && setCurrentPage(currentPage - 1)
  }
  return (
    <>
       <Header insideProduct/>
      <div className='m-5'>
       {
        loading ? 
          <div className='text-center '> Loading...</div>
        :
         <div className="row pt-3">
          {/* Duplicate column according to products */}
         {
          allProducts.length > 0 ?
          visibleProductArray.map(product => (
          
          <div key = {product?.id} className="col-3">
            {/* cards */}
            <Card className='shadow p-2 mb-2'>
              <Card.Img style={{height : "250px"}} variant="top" src={product?.thumbnail} />
              <Card.Body className='text-center'>
                <Card.Title>{product?.title}</Card.Title>
                 <Link to={`/products/${product?.id}`} className='btn btn-primary'>View More</Link>
              </Card.Body>
            </Card>
          </div>
          ))
        : 
        <div className='fw-bolder'>No products found</div>
         }
         <div className='text-center m-5'>
          <button onClick={navigatePrevPage} className='btn'><FaBackward /></button>
          {currentPage} of {totalPages}
          <button onClick={navigateNextPage} className='btn'><FaForward /></button>
         </div>
        </div>
       }
      </div>
    </>
  )
}

export default Products
