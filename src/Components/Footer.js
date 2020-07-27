import React from 'react';
import logo from '../img/logo-circle-text-light.png';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup } from 'reactstrap';
import styled from 'styled-components';

const Footer = () => {
    return (
        <div className="pt-3" style={{ background: "#010A1F" }}>
            <Container fluid>
                <Row className="text-secondary">
                    <Col sm="12" lg={{ offset: 1, size: "auto" }}>
                        <Link className="ml-lg-5" to="/">
                            <img width="100px" src={logo} alt="" />
                        </Link>
                    </Col>
                    <Col className="mt-2" sm="12" lg={{ offset: 1, size: 3 }}>
                        <h5 className="text-white">Contact Info</h5>
                        <ListGroup className="no-list">
                            <li>Address: Your address goes here, your demo address.</li>
                            <li>Phone: +8880 44338899</li>
                            <li>Email: contact@kalyanisamriddhi.com</li>
                        </ListGroup>
                    </Col>
                    <Col className="mt-2" sm="12" lg={{ offset: 1, size: 3 }}>
                        <h5 className="text-white">Important Links</h5>
                        <ListGroup className="no-list">
                            <li><FooterLink to="/about"> About Us</FooterLink></li>
                            <li><FooterLink to="/events"> Events</FooterLink></li>
                            <li><FooterLink to="/contact">Contact Us</FooterLink></li>
                        </ListGroup>
                    </Col>
                </Row>
                <Row className="pb-3 text-secondary mt-2">
                    <Col sm="12" lg={{ offset: 1, size: "auto" }}>
                        <p className="ml-lg-5 mb-0 small">Copyright ©2020 All rights reserved | Made by Avi Garg & Yash Kalyani</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

const FooterLink = styled(Link)`
    color: #6c757d;
    &:hover {
        color: #ffffff;
        text-decoration: none;    
    }
`

export default Footer;