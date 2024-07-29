import React from 'react';
import { Navbar, Nav } from 'rsuite';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Import the CSS file

function NavBar() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/");
    };

    const handleTicketClick = () => {
        navigate("/submit-ticket");
    };

    const handleAboutClick = () => {
        navigate("/about");
    };

    const handleLoginClick = () => {
        navigate("/login");
    };

    return (
        <Navbar className="custom-navbar" style={{ zIndex: 10 }}>
            <Navbar.Brand className="custom-navbar-brand" onClick={handleHomeClick}>
                IT Ticketing System
            </Navbar.Brand>
            <Nav>
                <Nav.Item className="custom-nav-item" onClick={handleTicketClick}>Submit a Ticket</Nav.Item>
                <Nav.Item className="custom-nav-item" onClick={handleAboutClick}>About</Nav.Item>
                <Nav.Menu title="Contact">
                    <Nav.Item>Via Email</Nav.Item>
                    <Nav.Item>Via Phone</Nav.Item>
                </Nav.Menu>
            </Nav>
            <Nav className="custom-nav-right" pullRight>
                <Nav.Item className="custom-nav-item" onClick={handleLoginClick}>Admin Login</Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default NavBar;