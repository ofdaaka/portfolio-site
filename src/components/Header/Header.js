import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Container,
  NavbarBrand,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import  {
    HomeRounded,
  SchoolRounded,
  WorkRounded,
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
  Telegram,
} from "@material-ui/icons";
import { Link, NavLink, withRouter } from "react-router-dom";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import resumeData from "../../utils/resumeData";
import CustomButton from '../Button/Button'
import './Header.css';

export const Header = (props) => {
  const pathName = props?.location?.pathname;

  return (
    <Navbar expand="lg" sticky="top" className="header">
      
        <Nav.Link as={NavLink} to="/" className="header_navlink">
          <Navbar.Brand className="header_home">
            <HomeRounded />
          </Navbar.Brand>
        </Nav.Link>
        <NavbarToggle />

        <Navbar.Collapse>
          <Nav className="header_left">
            {/* Resume Link */}
            <Nav.Link
              as={NavLink}
              to="/"
              className={pathName === "/" ? "header_link_active" : "header_link"}>
              Resume
            </Nav.Link>
            {/* Portfolio Link if class name is equal to true then give it clas of active if not then regular header link */}
            <Nav.Link
              as={NavLink}
              to="/Portfolio"
              className={pathName === "/Portfolio" ? "header_link_active" : "header_link"}>
              Portfolio
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/Contact"
              className={pathName === "/Contact" ? "header_link_active" : "header_link"}>
              Contact
            </Nav.Link>
          </Nav>
          <div className="header_right">
              {Object.keys(resumeData.socials).map(key => (
                  <a href={resumeData.socials[key].link} target="_blank">{resumeData.socials[key].icon}</a>
              ))}
              <Link  style={{ textDecoration: "none" }} to="/Contact"><CustomButton to="/Contact" text={'Hire Me'} icon={<Telegram/>} /></Link>
              
          </div>
        </Navbar.Collapse>
      
    </Navbar>
  );
};

export default withRouter(Header);
