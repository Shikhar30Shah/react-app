import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color = "primary">
          <div className = "container">
          <img src={logo} className="App-logo" alt="logo" />
            <NavbarBrand href = "#">CLASS 2.0</NavbarBrand>
          </div>
        </Navbar>
        <Menu/>
    </div>
  );
}

export default App;
