
import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import { FaTruckFast } from 'react-icons/fa6';
import { Link } from 'react-router-dom';





function Header() {
  return (
   <Navbar expand="lg" className="bg-primary ">
      <Container>
        <Navbar.Brand href="#home"><Link to={'/'} className='text-light fw-bold text-decoration-none'><FaTruckFast className='me-2' />E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <input type="text" className='form-control' placeholder='Search your products' />
            </Nav.Item>
            <Link to={'/wishlist'} className='text-light text-decoration-none fw-bold ms-5 mt-2'><CiHeart className='fw-bold fs-4'/>Wishlist <Badge pill bg='secondary'>10</Badge></Link>
            <Link to={'/cart'} className='text-light text-decoration-none fw-bold ms-5 mt-2'><CiShoppingCart className='fw-bold fs-4' />Cart <Badge pill bg='secondary'>10</Badge></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
