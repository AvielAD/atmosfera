import React, { useState } from 'react';
import Link from 'next/link';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';

import Tipography1 from '../../StylesUI/Tipography1';
import Styles from './styles.module.css';
const NavbarApp = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar className="fixed-top bg-transparent" light expand="md">
                <NavbarBrand href="/"> <Tipography1> Atmosfera</Tipography1></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>

                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link href="/"> </Link>
                        </NavItem>

                        <NavItem>
                            <Link href="/">SERVICES</Link>
                        </NavItem>

                        <NavItem>
                            <Link href="/">PORTFOLIO</Link>
                        </NavItem>

                        <NavItem>
                            <Link href="/">TEAM</Link>
                        </NavItem>

                        <NavItem>
                            <Link href="/components/">CONTACT</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}
export default NavbarApp;