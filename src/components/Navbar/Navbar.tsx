import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
// import "../pages/Home.css";
import { Link } from "react-router-dom"
import './style.css';
export function Navbar() {
    return (
         <NavbarBs sticky="top" className="tests bg-white shadow-sm mb-3">
             <Container>
                 <Nav className="me-auto navWrapper">
                
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