import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export const HeaderComp = () => {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="#inicio">Autogestión</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#planDeEstudio">Plan de estudio</Nav.Link>
            <Nav.Link href="#solicitudes">Solicitudes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default HeaderComp;
