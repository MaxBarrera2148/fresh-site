import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav } from 'react-bootstrap';
import { StaticImage } from "gatsby-plugin-image";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css"

const Header = () => (
  <header className="bg-black">
    <Container>
      <Navbar id="navbar" expand="md" variant="dark">
        <Navbar.Brand href="/">   
            <StaticImage
                    src="C:\Users\HP\Desktop\fresh-site\assets\iov-logo-bvn.svg"
                    alt="logo"
                    placeholder="blurred"
                    width="250px"
                
                />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul" className="ms-auto text-center">
            <Nav.Item as="li">
              <Link to="/" id="home" className="nav-link" activeClassName="active"><h3>Home</h3></Link>
            </Nav.Item> 
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header