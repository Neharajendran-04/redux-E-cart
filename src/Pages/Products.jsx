import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div className='m-5'>
      <div className="row pt-3">
        {/* Duplicate column according to products */}
        <div className="col-3">
          {/* cards */}
          <Card className='shadow p-2'>
            <Card.Img style={{height : "250px"}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5zfSHaFjCVn8nNRnjGdH5x066TcdDHHQpgH64O2xCMnvbP7regOE-cX9a&s=10" />
            <Card.Body className='text-center'>
              <Card.Title>Sunscreen</Card.Title>
               <Link to={`/products/:id`} className='btn btn-primary'>View More</Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Products
