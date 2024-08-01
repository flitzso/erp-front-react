import React from 'react';
import { Navbar, Nav, NavDropdown, Card } from 'react-bootstrap';
import './css/SideBar.css';

const Sidebar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="d-flex flex-column sidebar">
      <Card className="text-center">
        <Card.Img variant="top" src="/path/to/your/logo.png" alt="Company Logo" />
      </Card>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column">
            <NavDropdown title="Cadastro" id="cadastro-dropdown">
              <NavDropdown.Item href="#cadastro1">Opção 1</NavDropdown.Item>
              <NavDropdown.Item href="#cadastro2">Opção 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Produtos" id="produtos-dropdown">
              <NavDropdown.Item href="#produtos1">Opção 1</NavDropdown.Item>
              <NavDropdown.Item href="#produtos2">Opção 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Orçamentos" id="orcamentos-dropdown">
              <NavDropdown.Item href="#orcamentos1">Opção 1</NavDropdown.Item>
              <NavDropdown.Item href="#orcamentos2">Opção 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Vendas" id="vendas-dropdown">
              <NavDropdown.Item href="#vendas1">Opção 1</NavDropdown.Item>
              <NavDropdown.Item href="#vendas2">Opção 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Expedição" id="expedicao-dropdown">
              <NavDropdown.Item href="#expedicao1">Opção 1</NavDropdown.Item>
              <NavDropdown.Item href="#expedicao2">Opção 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Estoque" id="estoque-dropdown">
              <NavDropdown.Item href="#estoque1">Opção 1</NavDropdown.Item>
              <NavDropdown.Item href="#estoque2">Opção 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Financeiro" id="financeiro-dropdown">
              <NavDropdown.Item href="#financeiro1">Opção 1</NavDropdown.Item>
              <NavDropdown.Item href="#financeiro2">Opção 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Notas Fiscais" id="notasfiscais-dropdown">
              <NavDropdown.Item href="#notasfiscais1">Opção 1</NavDropdown.Item>
              <NavDropdown.Item href="#notasfiscais2">Opção 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Relatórios" id="relatorios-dropdown">
              <NavDropdown.Item href="#relatorios1">Opção 1</NavDropdown.Item>
              <NavDropdown.Item href="#relatorios2">Opção 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Notificações" id="notificacoes-dropdown">
              <NavDropdown.Item href="#notificacoes1">Opção 1</NavDropdown.Item>
              <NavDropdown.Item href="#notificacoes2">Opção 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Configurações" id="configuracoes-dropdown">
              <NavDropdown.Item href="#configuracoes1">Opção 1</NavDropdown.Item>
              <NavDropdown.Item href="#configuracoes2">Opção 2</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Sidebar;
