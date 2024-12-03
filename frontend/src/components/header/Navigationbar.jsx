

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from 'react';


function Navigationbar({ authToken, setAuthToken, loginUser, setLoginUser }) {
   
  const style = {
    faSun:{
      // padding: "10px 20px",
      // fontSize: "16px",
      // backgroundColor: theme === "light" ? "#333" : "#fff",
      // color: theme === "light" ? "#fff" : "#000",
      // border: "none",
      // borderRadius: "5px",
      // cursor: "pointer",
      // display: "flex",
      // alignItems: "center",
      // gap: "8px",
    }
  }
  const [theme, setTheme] = useState('light');

  // side effect
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || ('light');
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

   const toggleTheme = () => {
     const newTheme = theme === 'light' ? 'dark' : 'light';
     setTheme(newTheme);
     localStorage.setItem('theme', newTheme);
     document.body.className = newTheme;
   }
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/">🏎️CarBay</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/listing">Cars</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>

            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/add-car">Add Cars</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                My Favorite
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/register">
                Register
              </NavDropdown.Item>
              {authToken ? (<NavDropdown.Item href="/login">
                Logout
              </NavDropdown.Item>) : (<NavDropdown.Item href="/login">
                Login
              </NavDropdown.Item>)}


            </NavDropdown>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            <Button onClick={toggleTheme} style={style.faSun}>
              {theme === 'light' ? <faSun /> : <faMoon />}
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;