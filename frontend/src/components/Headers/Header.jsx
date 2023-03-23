import React from 'react'
import '../Headers/header.css'
import { Container, Row, Button } from 'reactstrap'
import { Navlink, Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png'

const nav__links = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '#',
    display: 'About',
  },
  {
    path: '/tours',
    display: 'Tours',
  },
]

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* ============== logo =================*/}
              <div className="logo">
                <img src={logo} alt="" />
              </div>
            {/* ============== logo =================*/}
            {
              nav__links.map((nav) => (
                <div>
                  {nav.display}
                </div>
              ))
            }
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header