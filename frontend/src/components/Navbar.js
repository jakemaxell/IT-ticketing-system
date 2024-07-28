import { Navbar, Nav } from 'rsuite';
import { useNavigate } from 'react-router-dom';

function NavBar(){
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/");
    };

    const handleTicketClick = () => {
        navigate("/submit-ticket");
    };

    return(
        <Navbar style={{ zIndex: 10, position: 'relative' }}>
            <Navbar.Brand onClick={handleHomeClick}>IT Ticketing System</Navbar.Brand>
            <Nav>
                <Nav.Item onClick={handleTicketClick}>Submit a Ticket</Nav.Item>
                <Nav.Item>Test</Nav.Item>
                <Nav.Item>About</Nav.Item>
                <Nav.Menu title="Contact">
                    <Nav.Item>Via Email</Nav.Item>
                    <Nav.Item>Via Phone</Nav.Item>
                </Nav.Menu>
            </Nav>
            <Nav pullRight>
                <Nav.Item>Admin Login</Nav.Item>
            </Nav>
        </Navbar>
    );
};

export default NavBar;