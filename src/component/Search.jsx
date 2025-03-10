import React from 'react'
import './Search.css'
import { MdArrowOutward } from "react-icons/md";

import vector8 from '../assets/Vector-8.png'
import vector9 from '../assets/Vector-9.png'
import vector10 from '../assets/Vector-10.png'
import vector7 from '../assets/Vector-7.png'
function Search() {
  return (
    <div className='container mt-5 py-5'>
        <div>
            <div className='Search-flex'>
                <div className='Search-flex-items'>
                    <div className='Search-items'>
                      <h5 className='Search-h4'>Search engine <br />optimization</h5>
                      <img src={vector8} alt="" className='Search-img'/>
                    </div>
                    <button className='Search-btn'><span className='Serach-span'><MdArrowOutward /></span> Learn More</button>
                </div>
                <div className='Search-flex-items-1'>
                    <div className='Search-items'>
                      <h5 className='Search-h4-1'>Pay per click <br />advertising</h5>
                      <img src={vector9} alt="" className='Search-img-1'/>
                    </div>
                    <button className='Search-btn-1'><span className='Serach-span-1'><MdArrowOutward /></span> Learn More</button>
                </div>
            </div>



            <div className='Search-flex mt-3'>
                <div className='Search-flex-items-1'>
                    <div className='Search-items'>
                      <h5 className='Search-h4-1'>Social media <br />marketing</h5>
                      <img src={vector7} alt="" className='Search-img-1'/>
                    </div>
                    <button className='Search-btn-1'><span className='Serach-span-1'><MdArrowOutward /></span> Learn More</button>
                </div>
                <div className='Search-flex-items'>
                    <div className='Search-items'>
                      <h5 className='Search-h4'>Email <br /> marketing</h5>
                      <img src={vector10} alt="" className='Search-img'/>
                    </div>
                    <button className='Search-btn'><span className='Serach-span'><MdArrowOutward /></span> Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search