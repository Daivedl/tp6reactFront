import Navbar from 'react-bootstrap/Navbar';
import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class NavBar extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">TP6</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/where">Donde</Nav.Link>
                        <Nav.Link href="/products">Productos</Nav.Link>
                        <Nav.Link href="/crud">CRUD</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Buscar</Button>
                    </Form>
                </Navbar>
            </React.Fragment>
        )
    }

}

export default NavBar;