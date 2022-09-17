import React, { Fragment, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../logo/motor-sport-logo_142499-129.jpg";
function Navbars() {
  const [show, setShow] = useState(false);
  const [showlogin, setShowlogin] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  const showDropdownlogin = (e) => {
    setShowlogin(!showlogin);
  };
  const hideDropdownlogin = (e) => {
    setShowlogin(false);
  };

  return (
    <Fragment>
      <Navbar bg="light" expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand>
            <img
              src={logo}
              width="80"
              height="70"
              className="d-inline-block align-top"
              alt="logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                title="home"
                id="collasible-nav-dropdown"
              >
                <NavLink
                  className={(navData) =>
                    (navData.isActive ? "actives" : "") + " nav-link activeds"
                  }
                  to="/artikel"
                >
                  artikel
                </NavLink>
                <NavLink
                  className={(navData) =>
                    (navData.isActive ? "actives" : "") + " nav-link activeds"
                  }
                  to="/event"
                >
                  event
                </NavLink>
                <NavLink
                  className={(navData) =>
                    (navData.isActive ? "actives" : "") + " nav-link activeds"
                  }
                  to="/galerifoto"
                >
                  Galery Foto
                </NavLink>
                <NavLink
                  className={(navData) =>
                    (navData.isActive ? "actives" : "") + " nav-link activeds"
                  }
                  to="/clienus"
                >
                  Klient Kami
                </NavLink>
              </NavDropdown>
              <NavLink className="nav-link" to="/profile">
                Profile
              </NavLink>
              <NavLink className="nav-link" to="/visimisi">
                Visi dan misi
              </NavLink>
              <NavLink className="nav-link" to="/produks">
                Produk kami
              </NavLink>

              <NavLink className="nav-link" to="/kontakKami">
                kontak kami
              </NavLink>
              <NavLink className="nav-link" to="/aboutus">
                About US
              </NavLink>
            </Nav>

            <Nav>
              <NavDropdown
                show={showlogin}
                onMouseEnter={showDropdownlogin}
                onMouseLeave={hideDropdownlogin}
                title="Login"
                id="collasible-nav-dropdown"
              >
                <NavLink
                  className={(navData) =>
                    (navData.isActive ? "actives" : "") + " nav-link activeds"
                  }
                  to="/signin"
                >
                  sign in
                </NavLink>
                <NavLink
                  className={(navData) =>
                    (navData.isActive ? "actives" : "") + " nav-link activeds"
                  }
                  to="/signup"
                >
                  sign up
                </NavLink>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default Navbars;
