import React from 'react'

import ServiceCard from './ServiceCard';
import {Col} from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const serviceData = [
    {weatherImg},{img:guideImg},{imgUrl:customizationImg,
    title: "Weather",
desc:"Lorem Ipsum"}
]

const ServicesList = ({item}) => {

    // const {imgUrl, title,desc} = item

  return (
    <>

        {
            serviceData.map((item,index) => 
            <Col lg='3' key={index}>
            ServiceCard item={item}</Col>)
        }
    </>
  );
};

export default ServicesList