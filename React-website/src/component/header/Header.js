import React from 'react';
import '../../App.css';
import '../../style/bootstrap.min.css';
import { NavDropdown, Navbar, Nav, Modal,Form } from 'react-bootstrap';
import { useState } from 'react';


function Header() {
  
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    
      <Navbar bg="white" expand="lg" className="custombar">
        
        <Navbar.Brand href="#home">
        <img src={require('../../images/logo/watch.png')} width="180px" height="80px"  className="d-inline-block align-top" alt="React Bootstrap logo" />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="#home" className="barlink">Home</Nav.Link>
          <Nav.Link href="#link" className="barlink">About</Nav.Link>

          <NavDropdown title="Brands" id="basic-nav-dropdown" className="barlink" >
              <NavDropdown.Item href="#action/3.1" className="barlink">Seiko</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="barlink">Rolex</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="barlink">Hablot</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className="barlink">Tissot</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <>
            <button  onClick={handleShow} className="modal-btn" >
              SingIn
              </button>
              <Modal show={show} onHide={handleClose} animation={false} >
                <div className="main-modal">
                  <div className="modal-heading">
                    <h1>SingIn</h1>
                  </div>
                  <hr></hr>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" className="modal-check" />
                    </Form.Group>
                  </Form>
                </div>
                <Modal.Footer className="modalsubmit">
                <button type="submit" className="submit" >
                  Submit
                </button>
                </Modal.Footer>
              </Modal>
            </>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

  );

}
export default Header;