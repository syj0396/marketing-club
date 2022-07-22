import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
// import "../pages/Home.css";
import './style.css';
export function Navbar() {
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link className="navTitle" to="/" as={NavLink}>
                        Marketing Club
                    </Nav.Link>
                    <Nav.Link className="navElem" to="/class" as={NavLink}>
                        CLASS
                    </Nav.Link>
                    <Nav.Link className="navElem" to="/community" as={NavLink}>
                        COMMUNITY
                    </Nav.Link>
                    <Nav.Link className="navElem" to="/mypage" as={NavLink}>
                        MY
                    </Nav.Link>
                </Nav>
            </Container>
        </NavbarBs>
    )
}