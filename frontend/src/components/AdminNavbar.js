import React from 'react';
import { Navbar, Nav } from 'rsuite';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Import the CSS file

function AdminNavBar(props) {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/");
    };

    return (
        <Navbar className="custom-navbar" style={{ zIndex: 10 }}>
            <Navbar.Brand className="custom-navbar-brand" onClick={handleHomeClick}>
                IT Ticketing System
            </Navbar.Brand>
            
            <Nav className="custom-nav-right" pullRight>
                <Nav.Item className="custom-nav-item">{ props.firstName } { props.lastName }</Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default AdminNavBar;