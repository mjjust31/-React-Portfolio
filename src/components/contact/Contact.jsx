import Form from "react-bootstrap/Form";
import "./Contact.scss";

function Contact() {
  return (
    <Form className="custom-container container">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Jane Doe" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label> Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="write your message here"
        />
      </Form.Group>
      <button>Submit your message</button>
    </Form>
  );
}

export default Contact;
