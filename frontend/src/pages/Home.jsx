import React from 'react'
import '../styles/home.css'

import { Container,Row,Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp44';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';

import Subtitle from '../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServicesList from '../services/ServicesList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImageGallery from '../components/image-gallery/MasonryImgesGallery';
import Testimonial from '../components/Testimonial/Testimonial';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return (
    <>
      {/* hero section starts */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Know Before You Go'}/>
                  <img src={worldImg} alt="" />
                </div>
                <h1>Traveling opens the door to creating <span className="highlight">memories</span></h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Neque ratione sunt dicta minus nobis? Voluptate repellendus 
                labore non at aliquid vero doloribus itaque alias debitis, 
                corrupti voluptatibus quos explicabo aperiam?</p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            <SearchBar/>
          </Row>
        </Container>
      </section>
      {/* hero section end */}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtiles">What we serve</h5>
              <h2 className='services__title'>We offer our best services</h2>
            </Col>
            <ServicesList />
          </Row>
        </Container>
      </section>

      {/* === Featured tour section === */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Explore'}/>
              <h2 className="featured__tour-title">Our featured tour</h2>
            </Col>
            <FeaturedTourList/>
          </Row>
        </Container>
      </section>
      {/* === Featured tour section === */}

      {/* experience starts */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={'Experience'}/>

                <h2>With our all experience <br /> we will serve you.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fugiat, 
                rerum unde aliquid quisquam temporibus quos beatae est, 
                officia voluptatibus culpa laboriosam, ad dolorum non molestias consequuntur. 
                Cupiditate, dolorem quaerat.</p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* experience ends */}

      {/* gallery section Start */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'}/>
              <h2 className="gallery__title">Visit our customer tour gallery</h2>
            </Col>
            <Col lg='12'>
              <MasonryImageGallery/>
            </Col>
          </Row>
        </Container>
      </section>
      {/* gallery section End */}
      {/* testimonial section start */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'}/>
              <h2 className="testimonial__title">What our fans are saying about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonial/>
            </Col>
          </Row>
        </Container>
      </section>
      {/* testimonial section end */}
      <Newsletter/>
    </>
  );
};

export default Home;