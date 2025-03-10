import React from 'react'
import './Img.css'
import Vector1 from '../assets/Vector-1.png'
import Vector2 from '../assets/Vector-2.png'
import Vector3 from '../assets/Vector-3.png'
import Vector4 from '../assets/Vector-4.png'
import Vector5 from '../assets/Vector-5.png'
import Vector6 from '../assets/Vector-6.png'
const Img = () => {
  return (
    <div className='container mt-5'>
      <marquee behavior="" direction="">
        <div className='img-flex'>
            <img src={Vector1} alt="" className='img-1'/>
            <img src={Vector2} alt=""/>
            <img src={Vector3} alt=""  className='img-1'/>
            <img src={Vector4} alt="" />
            <img src={Vector5} alt="" />
            <img src={Vector6} alt="" />
        </div>
      </marquee>
    </div>
  )
}

export default Img