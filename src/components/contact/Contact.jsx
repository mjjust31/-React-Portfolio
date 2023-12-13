import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Contact.scss";
import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [isSubmitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vy237br",
        "template_qv0apwa",
        form.current,
        "jgRJizOryvmRNPKaH"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const closeModal = () => {
    setSubmitted(false);
  };

  return (
    <div className="custom-container container">
      {!isSubmitted ? (
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control name="full-name" type="text" placeholder="Jane Doe" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              name="message"
              as="textarea"
              rows={3}
              placeholder="write your message here"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit your message
          </Button>
        </Form>
      ) : (
        <Modal show={isSubmitted} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>Success!</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ color: "black" }}>
            Your message has been successfully submitted!
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{ color: "black" }}
              variant="secondary"
              onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default Contact;
