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
        defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link=3">Resume</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Navbar;
