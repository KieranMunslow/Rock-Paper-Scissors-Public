import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const NavMenu = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Rock Paper Scissors</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/SinglePlayer">One Player</Nav.Link>
                        <Nav.Link href="/Multiplayer">Two Player</Nav.Link>
                        {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav>
                    <Navbar.Brand href="/">Lizard Spock</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/SinglePlayerLS">One Player</Nav.Link>
                        <Nav.Link href="/MultiplayerLS">Two Player</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default NavMenu;