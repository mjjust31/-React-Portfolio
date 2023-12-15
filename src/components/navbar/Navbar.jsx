import "./Navbar.scss";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";

function Navbar() {
  const [activeKey, setActiveKey] = useState("/");

  const handleSelect = (selectedKey) => {
    setActiveKey(selectedKey);
  };

  return (
    <>
      <div className=" custom-background text-center p-3">Jessica Justmann</div>
      <Nav
        className="custom-navbar"
        justify
        variant="tabs"
        activeKey={activeKey}
        onSelect={handleSelect}>
        <Nav.Item>
          <Nav.Link href="/" eventKey="/">
            About Me
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/portfolio" eventKey="/portfolio">
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact-me" eventKey="/contact-me">
            Contact
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/resume" eventKey="/resume">
            Resume
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Navbar;
