// import { Link } from "react-router-dom";
// import ButtonField from "../components/ButtonField";
// import { logout } from "../services/auth-header";
// import { useNavigate } from "react-router-dom";

// const Header = () => {

//   const navigate = useNavigate();
//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   }

//   return (
//     <header>
//       <div className="flex-basic-between" style={{ padding: '1.5rem 4rem'}}>
//         <div style={{ fontSize: '40px', fontWeight: 600 }}>
//           <Link to='/cake'>Cake</Link>
//         </div>
//         <ButtonField><Link to='/cake/create'>Create Cake</Link></ButtonField>
//         <ButtonField onClick={handleLogout}>Logout</ButtonField>
//       </div>
//     </header>
//   );
// }

// export default Header;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { logout } from "../services/auth-header";
import { useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  }
  return (
    <Navbar  expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/cake">Cake</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/cake">Home</Nav.Link>
            <Nav.Link href="/cake/create">Create Cake</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleLogout} variant="secondary">Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
