import React from 'react'
import { FaArrowRight, FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaTruckFast } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import {Link} from 'react-router-dom'

function Footer() {
  return (
   <div className='container-fluid'>
      <div className='row bg-primary text-dark p-5'>
            <div className='col-lg-5'>
              
              <h2> <FaTruckFast />DailyCart</h2>
             <p> Designed and built with all the love in the world by the <br />Luminar team with the help of our contributors. </p>
            <p>Code Licensed Luminar, docs CC BY 3.0</p>
            <p>Currently v5.3.2.</p>
            </div>
            <div className='col-lg-2'>
            <h2>Links</h2>
            <p className='mb-1'>Home</p>
            <p className='mb-1'>Wishlist</p>
            <p className='mb-1'>Cart</p>
            </div>
            <div className='col-lg-2'>
              <h2>Guides</h2>
              <p className='mb-1'>React</p>
              <p className='mb-1'>React Bootstrap</p>
              <p className='mb-1'>React Router</p>
            </div>
            <div className='col-lg-3'>
              <h2>Contact Us</h2>
                <input type="text" placeholder='Email Here' className='me-2 p-1'/>
                <FaArrowRight />
                <div>
                 <FaFacebook />
                 <FaTwitter className='m-4'  />
                 <FaWhatsapp />
                 <FaInstagram  className='m-4' />
                 <IoMdMail />
                 <FaPhoneAlt className='m-4'  />

                </div>
            </div>
                  <p className='text-center'>Copyright &copy; August 2025 Batch,Daily Cart. Built with React Redux.</p>
      </div>

   </div>
  )
}

export default Footer
