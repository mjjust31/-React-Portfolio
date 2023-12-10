import "./Navbar.scss";
import Nav from "react-bootstrap/Nav";

function Navbar() {
  return (
    <>
      <div className=" custom-background text-center p-3">Jessica Justmann</div>
      <Nav
        className="custom-navbar"
        justify
        variant="tabs"
        defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link href="/">About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/portfolio" eventKey="portfolio">
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact-me" eventKey="contact-me">
            Contact
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/resume" eventKey="resume">
            Resume
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Navbar;
