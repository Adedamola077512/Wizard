import React from 'react'
import './Let.css'
import vector11 from '../assets/Vector-11.png'
function Let() {
  return (
    <div className='container mt-5 py-5'>
        <div className='let-flex'>
            <div>
               <h5 className='let-h5'>Let's make things happen!</h5>
               <p className='let-p'>Contact us today ro learn more about how our digital <br />marketing services can help your business grow and <br />succeed online</p>
               <button className='let-btn'>Get your free proposal</button>
            </div>
            <div>
                <img src={vector11} alt=""  className='let-img'/>
            </div>
        </div>
    </div>
  )
}

export default Let