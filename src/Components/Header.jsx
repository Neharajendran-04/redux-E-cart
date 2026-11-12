
import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from 'react-icons/fa';
import { FaRegHeart, FaTruckFast } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchProduct } from '../Redux/Slices/productSlice';



function Header({insideProduct}) {
  const dispatch = useDispatch()
  const userWishlist = useSelector(state  => state.wishlistReducer)
  const userCart = useSelector(state=>state.CartReducer)
  return (
   <Navbar expand="lg" className="bg-primary ">
      <Container>
        <Navbar.Brand ><Link to={'/'} className='text-light fw-bold text-decoration-none '><FaTruckFast className='fs-2 fw-bold me-2' />E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {insideProduct && <Nav.Item>
              <input onChange={e => dispatch(searchProduct(e.target.value))} type="text" className='form-control' placeholder='Search your products' />
            </Nav.Item>}
            <Link to={'/wishlist'} className='text-light text-decoration-none fw-bold ms-5 mt-2'><span ><FaRegHeart className='fw-bold fs-4 text-danger me-1'/></span  >Wishlist <Badge pill bg='secondary'>{userWishlist?.length}</Badge></Link>
            <Link to={'/cart'} className='text-light text-decoration-none fw-bold ms-5 mt-2'><FaShoppingCart className='text-success fw-bold fs-3 me-1' />Cart <Badge pill bg='secondary'>{userCart?.length}</Badge></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
