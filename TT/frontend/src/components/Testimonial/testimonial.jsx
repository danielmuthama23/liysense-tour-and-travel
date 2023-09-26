import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const testimonial = () => {

    const settings = {
      dots:true,
      infinite:true,
      autoplay:true,
      speed:1100,
      swipeToSlide:true,
      autoplaySpeed:2050,
      slideToShow:3,

      responsive:[
        {
          breakpoint:992,
          settings:{
            slideToShow:2,
            slideToScroll:1,
            infinite:true,
            dots:true,
          }
        }
      ]
    }

  return <Slider {...settings}>
  
    <div className="testimonial py-4 px-3">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Facere culpa soluta doloremque dolore veritatis quisquam iure reprehenderit excepturi nemo voluptatum eius quod accusamus, 
      praesentium beatae quos dolores est ducimus ea.</p>

      <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h6 className='mb-0 mt-3'>John Doe </h6>
          <p>Customer</p>
        </div>
      </div>
    <div className="testimonial py-4 px-3">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Facere culpa soluta doloremque dolore veritatis quisquam iure reprehenderit excepturi nemo voluptatum eius quod accusamus, 
      praesentium beatae quos dolores est ducimus ea.</p>

      <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h6 className='mb-0 mt-3'>John Doe </h6>
          <p>Customer</p>
        </div>
        </div>
      </div>
    <div className="testimonial py-4 px-3">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Facere culpa soluta doloremque dolore veritatis quisquam iure reprehenderit excepturi nemo voluptatum eius quod accusamus, 
      praesentium beatae quos dolores est ducimus ea.</p>

      <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h6 className='mb-0 mt-3'>Lia Frank </h6>
          <p>Customer</p>
        </div>
      </div>
    </div>
    </div>
  </Slider>
};

export default testimonial