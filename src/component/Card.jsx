import React from 'react'
import './Card.css'
import { MdArrowOutward } from "react-icons/md";
const Card = () => {
  return (
    <div className='container mt-5 py-5'>
        <div className='card-flex'>
            <div>
                <h6>
                For a local restaurant, we <br />
                implemented a targeted PPC <br />
                campaign that resulted in a 50% <br />
                increase in website traffic and a <br />
                25% in sales
                </h6>
                <h6 className='card-h6'><b>Learn more </b><MdArrowOutward /></h6>
            </div>
            <div class="vertical-hr"></div>
            <hr />
            <div>
                <h6>
                For a local restaurant, we <br />
                implemented a targeted PPC <br />
                campaign that resulted in a 50% <br />
                increase in website traffic and a <br />
                25% in sales
                </h6>
                <h6 className='card-h6'><b>Learn more </b><MdArrowOutward /></h6>
            </div>
            <div class="vertical-hr"></div>
            <hr />
            <div>
                <h6>
                For a local restaurant, we <br />
                implemented a targeted PPC <br />
                campaign that resulted in a 50% <br />
                increase in website traffic and a <br />
                25% in sales
                </h6>
                <h6 className='card-h6'><b>Learn more </b><MdArrowOutward /></h6>
            </div>
        </div>
    </div>
  )
}

export default Card