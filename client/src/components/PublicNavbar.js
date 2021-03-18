import React, { useState } from "react";
import { Nav, Navbar,NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";
import SearchBar from "./SearchBar";
import {useSelector,useDispatch} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faShoppingCart} from "@fortawesome/free-solid-svg-icons"

import authActions from "../redux/actions/auth.actions"


const PublicNavbar = () => {
  const dispatch = useDispatch();
  const user = useSelector ((state)=> state.auth.user)
  const isAuthenticated = useSelector ((state)=> state.auth.isAuthenticated)
  const loading = useSelector ((state)=> state.auth.loading)


  const [isOpen, setOpen] = useState(false);

  const handleLogout  = () =>{
    dispatch(authActions.logout())
  }

  const userLink = (
    <Nav>
      <Nav.Link >
        <div className="nav-icon">
          <FontAwesomeIcon icon={faUser} size="lg" /> 
        </div>
     
      </Nav.Link>
      <Nav.Link>
        <div>
          <strong>{user?.name}</strong>
        </div>
      </Nav.Link>
      <Nav.Link>
      <FontAwesomeIcon icon={faShoppingCart} size="lg" /> 

      </Nav.Link>
      <Nav.Link onClick={handleLogout} >
      Log out
      </Nav.Link>
      
        
    </Nav>
 
  );

  const adminLink = (
    <Nav>
      <Nav.Link >
        <div className="nav-icon">
        <FontAwesomeIcon icon={faUser} size="lg" /> 
        </div>
     
      </Nav.Link>
      <Nav.Link>
        <div>
          <strong>{user?.name}</strong>
        </div>
      </Nav.Link>
      <NavDropdown title="Admin" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to= "/admin/users">Users</NavDropdown.Item>
        <NavDropdown.Item as={Link} to= "/admin/products">Products</NavDropdown.Item>
        <NavDropdown.Item as={Link} to= "/admin/orders">Orders</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link onClick={handleLogout} >
        
      Log out
      </Nav.Link>
      
        
    </Nav>

  )
  
  const publicLink = (
    <Nav className="ml-auto">
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>

  )

  return (
    <div>
      <Navbar bg="custom" expand="md" variant="dark">
        <Navbar.Brand as={Link} to="/">
          CoderShop
        </Navbar.Brand>
        <Navbar.Toggle
          bsPrefix="navbar-toggler hamburger-button"
          children={<Hamburger toggled={isOpen} toggle={setOpen} />}
          aria-controls="responsive-links"
        />
        <Navbar.Collapse id="responsive-links">
          <div className="d-md-block d-none " style={{flexGrow: "1"}}>
            <SearchBar />
          </div>
          {isAuthenticated && user.role === "user"? userLink: isAuthenticated && user.role === "admin"? adminLink: publicLink}
        </Navbar.Collapse>
      </Navbar>
      <div className="bg-custom d-md-none py-3">
        <SearchBar />
      </div>
    </div>
  );
};

export default PublicNavbar;
