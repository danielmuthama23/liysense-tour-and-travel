/* eslint-disable no-undef */
import React, {useRef} from 'react';
import './search-bar.css'
import {Col, Form,FormGroup} from 'reactstrap';

const SearchBar = () => {

    const locationRef = useRef('')
    const distanceRef = useRef(0)
    // eslint-disable-next-line no-unused-vars
    const maxGroupMaxRef = useRef(0)

    const searchHandler = ()=> {

        const location = locationRef.current.value
        const distance = distanceRef.current.value
        // eslint-disable-next-line no-undef
        const maxGroupSize = maxGroupSizeRef.current.value

        if(location==='' || distance==='' || maxGroupSize===''){
            return alert('All fields are required!');
        }
    }

  return (
    <Col lg='12'>
        <div className="search__bar">
            <Form className='d-flex align-items-center gap-4'>
                <FormGroup className='d-flex gap-3 form__group form_group-fast'>
                    <span><i class="ri-map-pin-line"></i></span>
                    <div>
                        <h6>Locations</h6>
                        <input type="text" placeholder='Where are you going' ref={locationRef}/>
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form_group-fast'>
                    <span><i class="ri-map-pin-time-line"></i></span>
                    <div>
                        <h6>Distance</h6>
                        <input type="number" placeholder='Distance k/m'ref={distanceRef} />
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form_group-last'>
                    <span><i class="ri-group-line"></i></span>
                    <div>
                        <h6>Max People</h6>
                        <input type="number" placeholder='0' ref={maxGroupSizeRef}/>
                    </div>
                </FormGroup>

                <span className="search__icon" type='submit' onClick={searchHandler}>
                    <i class="ri-search-line"></i>
                </span>
            </Form>
        </div>
    </Col>
  )
};

export default SearchBar