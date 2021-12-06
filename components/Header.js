import React, { useState } from 'react';
import { APP_NAME } from '../config'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'
import { signout, isAuth } from '../actions/auth'
import '../static/css/style.css'
import Search from './blog/Search';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Dropdown
} from 'reactstrap';

Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeComplete = url => NProgress.done()
Router.onRouteChangeError = url => NProgress.done()

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="mainNav text-center" expand="md">
        <Link href="/">
          <NavLink style={{ cursor: 'pointer' }} className="font-weight-bold"><img src="https://i.ibb.co/V3m6LY4/Whats-App-Image-2021-11-27-at-12-39-17-PM-removebg-preview.png" className="headerimg"></img></NavLink>
        </Link>
        <NavbarToggler className="setcol" onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar >

            <React.Fragment >
              <NavItem className="ml-3 mr-3">
                <Link href="/blogs" >
                  <NavLink style={{ cursor: 'pointer' }} className="itemNav">Interview Blogs</NavLink>
                </Link>
              </NavItem>
            </React.Fragment>

            {!isAuth() && <React.Fragment>
              {/* <NavItem>
                <Link href="/signup">
                  <NavLink style={{ cursor: 'pointer' }} >Signup</NavLink>
                </Link>
              </NavItem> */}
              <NavItem className="ml-3 mr-3">
                <Link href="/signin">
                  <NavLink style={{ cursor: 'pointer' }} >Login</NavLink>
                </Link>
              </NavItem>

            </React.Fragment>}

            {isAuth() && isAuth().role == 0 && (
              <NavItem className="ml-3 mr-3">
                <Link href="/user">
                  <NavLink style={{ cursor: 'pointer' }}>{isAuth().name}'s Dashboard</NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && isAuth().role == 1 && (
              <NavItem className="ml-3 mr-3">
                <Link href="/admin">
                  <NavLink style={{ cursor: 'pointer' }}>{isAuth().name}'s Dashboard</NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && (
              <NavItem className="ml-3 mr-3">
                <NavLink style={{ cursor: 'pointer' }} onClick={() => signout(() => { Router.replace('/signin') })}>Logout</NavLink>
              </NavItem>
            )}
            <NavItem className="ml-3 mr-3">
              <a href="/user/crud/blog" className="btn btn-primary text-light">Write a blog</a>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>

    </div>
  );
}

export default Header;