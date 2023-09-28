import React from 'react'
import {Container,Row, Button} from 'reactstrap'
import {NavLink, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../assets/images/logo.png'
import './header.css';


const nav_link =[
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
]

const Header = () => {
  return (
    <header className="header bg-light">
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">

          {/* logo section  */}
          <div className="logo">
              <img src={logo} alt="" />
          </div>
          {/* logo section end */}

          {/* menu section */}
              <div className="navigation">
                <ul className="menu d-flex align-items-center gap-4">
                  {
                    nav_link.map((item,index) =>(
                      <li className="nav_item" key={index}>
                        <NavLink to={item.path} className={navClass=> navClass.isActive ? 'active_link': ""}>{item.display}</NavLink>
                      </li>
                    ))
                  }
                </ul>
              </div>
              
          {/* menu end */}

          <div className="nav_right d-flex align-items-center gap-4">

            <div className="nav_btns d-flex align-items-center gap-4">
              <Button className='btn secondary_btn text-white bg-dark'><Link to='/login'>Login</Link></Button>
              <Button className='btn primary_btn text-white bg-dark'><Link to='/register'>Register</Link></Button>
            </div>

            <span className="mobile_menu">
              <i class="ri-menu-line"></i>
            </span>

          </div>
          </div>
          
        </Row>
      </Container>
    </header>
  )
}


export default Header;