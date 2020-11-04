import React, { useState, useEffect } from 'react';
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
    const [scrollBar, setScrollBar] = useState(false);
    var listener = null;

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    useEffect(()=>{
        listener = document.addEventListener("scroll", e=>{
            var scrolled = document.scrollingElement.scrollTop;
            if(scrolled >= 120)
                setScrollBar(true);
            else
                setScrollBar(false)
        })
        document.removeEventListener("scroll", listener)
    });
    return (
        <div className={Styles.NavbarLink}>
            <Navbar className={`fixed-top ${scrollBar ? 'bg-blackAt': '' }`} light expand="md">
                <NavbarBrand href="/"> <Tipography1> Atmósfera</Tipography1></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>

                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link href="/"> ABOUT US </Link>
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
                            <Link href="/Blog">BLOG</Link>
                        </NavItem>

                        <NavItem>
                            <Link href="/">CONTACT</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}
export default NavbarApp;