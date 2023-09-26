import React from 'react'
import './service-card.css'

const ServicesList = ({item}) => {

    const {imgUrl, title,desc} = item

  return (
    <div className='service__item'>
        <div className="service__img">
            <img src={imgUrl} alt="" />
        </div>
        <h5>{title}</h5>
        <p>{desc}</p>
    </div>
  )
}

export default ServicesList