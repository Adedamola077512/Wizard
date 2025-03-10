import React from 'react'
import './Header.css'
import frame from '../assets/Frame1.png'
function Header() {
  return (
    <div className='container mt-5'>
        <div className='Header-flex'>
            <div>
                <h1 className='Header-h1'>Navigating the digital landscape for success</h1>
                <p className='Header-p'>Our digital marketing agency helps businesses <br />grow and succeed online through a range of <br />services including SEO, PPC, social media marketing <br />and content creation. </p>
                <button className='Header-btn'><b>Book a consultation</b></button>
            </div>
            <div>
              <img src={frame} alt="" className='Header-img'/>
            </div>
        </div>
    </div>
  )
}

export default Header