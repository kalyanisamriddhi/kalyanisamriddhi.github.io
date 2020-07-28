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
                        <h6 className="text-white mb-1">Contact Info</h6>
                        <ListGroup className="no-list">
                            <li>Address: Kalyani Solvex, Sudarshanpur,<br /> Raiganj, Uttar Dinajpur, West Bengal - 733134</li>
                            <li>Phone: +91 9733008834</li>
                            <li>Email: contact@kalyanisamriddhi.com</li>
                        </ListGroup>
                    </Col>
                    <Col className="mt-3 mt-lg-2" sm="12" lg={{ offset: 1, size: 3 }}>
                        <h6 className="text-white mb-1">Important Links</h6>
                        <ListGroup className="no-list">
                            <li><FooterLink to="/about"> About Us</FooterLink></li>
                            <li><FooterLink to="/events"> Events</FooterLink></li>
                            <li><FooterLink to="/contact">Contact Us</FooterLink></li>
                        </ListGroup>
                    </Col>
                </Row>
                <Row className="pb-3 text-secondary mt-2">
                    <Col sm="12" lg={{ offset: 1, size: "auto" }}>
                        <p className="ml-lg-5 mb-0 small">Copyright © 2020 All rights reserved | Made by Avi Garg & Yash Kalyani</p>
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