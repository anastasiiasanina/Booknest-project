import React from 'react';
import '../style/Header.css';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({setListEntered}) => {
  let [isOpen, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!isOpen);
  }

  return (
    <React.Fragment>
      <div className='super-header'>
        <NavbarBrand className="mr-auto" href="/">
          <img id='logo' alt="logo" src="assets/images/main-page/logo.png" height="60" width="71"/>
        </NavbarBrand>
        <h1 className='brand-name'>BOOKNEST</h1>
      </div>
      <Navbar className='header' dark expand="md">
        <div className="container">
            <NavbarToggler id='toggler' onClick={toggleNav}></NavbarToggler>
              <Collapse id='collapse' isOpen={isOpen} navbar>
                <Nav id='nav' navbar>
                  <NavItem className='text'>
                    <NavLink className="nav-link" to="/home">
                      <p>Home</p>
                    </NavLink>
                  </NavItem>
                  <NavItem onClick={() => setListEntered('Hardcover fiction')} className='text'>
                    <NavLink className="nav-link" to="/books">
                      <p>Books</p>
                    </NavLink>
                  </NavItem>
                  <NavItem className='text'>
                    <NavLink className="nav-link" to="/authors">
                      <p>Authors</p>
                    </NavLink>
                  </NavItem>
                  <NavItem className='text'>
                    <NavLink className="nav-link" to="/suggestions">
                      <p>Suggestions</p>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
        </div>
      </Navbar>
    </React.Fragment>
  )
}

export default Header;