import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";

const Navigation = ({ name, links }) => {
  return (
    <>
      
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Dating Service</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">

              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/CreateProfile">Create Profile</Nav.Link>
              <Nav.Link href="/ViewProfile">View Profile</Nav.Link>

             </Nav>
          </Navbar.Collapse>
        </Navbar>
        
      
    </>
  );
};
export default Navigation;
