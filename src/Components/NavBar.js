import React, { useState } from 'react';
import { Collapse, Navbar, Nav, NavItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../img/logo-circle-text.png';
import styled from 'styled-components';
import { mdiMenu, mdiClose } from '@mdi/js';
import Icon from '@mdi/react';

const NavBar = () => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <>
            <Navbar className="shadow px-lg-5 py-0" color="white" expand="lg" fixed="top" light>
                <Link to="/">
                    <img src={logo} alt="Kalyani Samriddhi" width="70px" />
                </Link>
                <Button color="transparent" className="px-0 d-block d-lg-none" onClick={toggleNavbar}>
                    <Icon path={collapsed ? mdiMenu : mdiClose} color="#07a768" size={1.5} />
                </Button>
                <Collapse isOpen={!collapsed} navbar>
                    <Nav className="ml-auto my-3 my-lg-0" navbar>
                        <NavItem className="d-flex align-items-center pr-2 mr-3 py-1">
                            <CustomNavLink to="/about" className="text-primary">About Us</CustomNavLink>
                        </NavItem>
                        <NavItem className="d-flex align-items-center pr-2 mr-2 py-1">
                            <CustomNavLink to="/events" className="text-primary">Events</CustomNavLink>
                        </NavItem>
                        <NavItem className="mt-2 mt-lg-0 ml-lg-3">
                            <Link to="/contact">
                                <Button className="rounded-0 px-4" color="success">
                                    Contact
                                </Button>
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
}

const CustomNavLink = styled(Link)`
    text-decoration: none;
    &:hover {
        text-decoration: none;
    }
`

export default NavBar;