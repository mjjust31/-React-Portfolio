import "./Navbar.scss";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeKey, setActiveKey] = useState("/");

  const handleSelect = (selectedKey) => {
    setActiveKey(selectedKey);
  };

  return (
    <>
      <div className="custom-background text-center p-3">Jessica Justmann</div>
      <Nav
        className="custom-navbar"
        justify
        variant="tabs"
        activeKey={activeKey}
        onSelect={handleSelect}>
        <Nav.Item>
          <Nav.Link as={Link} to="/" eventKey="/">
            About Me
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/portfolio" eventKey="/portfolio">
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/contact-me" eventKey="/contact-me">
            Contact
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/resume" eventKey="/resume">
            Resume
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Navbar;
