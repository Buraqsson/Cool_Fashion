import React from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import "./Footer.css";
import gmail from "./social/gmail.svg";
import facebook from "./social/facebook.svg";
import instagram from "./social/instagram.svg";
import linkedin from "./social/linkedin.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    
    <Box>
      <h1
        className="footerHeader"
        style={{ color: "white", textAlign: "center", marginTop: "-50px" }}
      >
        Make a statement for yourself!
      </h1>
        <Row className="d-flex justify-content-center">
          <Column>
            <Heading>Help</Heading>
            <FooterLink href="#">FAQ</FooterLink>
            <FooterLink href="#">Cookie</FooterLink>
            <FooterLink href="#">Return & Refund</FooterLink>
          </Column>
          <Column>
            <Heading>Contact</Heading>
            <FooterLink href="#">Press</FooterLink>
            <FooterLink href="#">Working with us</FooterLink>
            <Link to="/contact" target="_parent">
              <FooterLink style={{ color: "white" }}>Contact us</FooterLink>
            </Link>
          </Column>
          <Column>
          <Link to="/" target="_parent">
            <Heading> Cool Fashion</Heading>
            </Link>
            <FooterLink href="#">About us</FooterLink>
            <FooterLink href="#">Transparency</FooterLink>
            <Link to="/admin" target="_parent">
              <FooterLink style={{ color: "white" }}>Admin</FooterLink>
            </Link>
          </Column>
        </Row>

      <div className="footer">
        <div className="social-media">
          <a
            classsName="socia-icon"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:coolfashion@gmail.com"
          >
            <img src={gmail} alt="" />
          </a>
          <a
            classsName="socia-icon"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com"
          >
            <img src={linkedin} alt="" />
          </a>
          <a
            classsName="socia-icon"
            target="_blank"
            rel="noopener noreferrer"
            href="https://facebook.com/"
          >
            <img src={facebook} alt="" />
          </a>
          <a
            classsName="socia-icon"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/"
          >
            <img src={instagram} alt="" />
          </a>
        </div>
      </div>
    </Box>
  );
};

export default Footer;
