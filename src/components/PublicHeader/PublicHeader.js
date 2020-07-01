import React from 'react';
import NavLink from '../ActiveLink';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { Navbar, Nav } from 'react-bootstrap';


const PublicHeader = ({ router }) => {
    const { pathname } = router || {};
    
    const menu = [
        {
            link: '/',
            text: 'Home',
        },
        {
            link: '/blog',
            text: 'Blog',
        },
        {
            link: '/about',
            text: 'About',
        },
    ];
    
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Nextjs Training</Navbar.Brand>
            <Nav className="mr-auto">
                {menu.map(({ text, link }) => (
                    <NavLink
                        activeClassName="active"
                        as={link}
                        href={link}
                        key={link}
                    >
                    <a className="nav-link" > {text}</a>
                    {/* <Nav.Link>
                        {text}
                    </Nav.Link> */}
                </NavLink>
                ))}
            </Nav>
        </Navbar>
    );
}

PublicHeader.propTypes = {
    router: PropTypes.shape({
        pathname: PropTypes.string,
    }),
};

PublicHeader.defaultProps = {
    router: {
        pathname: '',
    },
};

export default withRouter(PublicHeader);