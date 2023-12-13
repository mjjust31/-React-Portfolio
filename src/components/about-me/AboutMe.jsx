import "./AboutMe.scss";
import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function AboutMe() {
  return (
    <>
      <section className="custom-container">
        <section className="about-me">
          <Col xs={6} md={4}>
            <img src="/images/Proifile.png" thumbnail='true' alt="Jessica Justmann" />
          </Col>
          <Accordion className="custom-accordion">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Bio</Accordion.Header>
              <Accordion.Body>
                <h6>A little bit about me...</h6>
                <p>
                  Greetings! My name is Jessica Justmann, and I am a graduate of
                  Lawrence University in Appleton, Wisconsin, where I obtained a
                  Bachelor's degree in Art History and Art. Over the past
                  decade, I have gained extensive experience in higher
                  education, working in diverse capacities. I began my
                  professional journey as a Hall Director in residence life and
                  eventually advanced to the position of Associate Academic
                  Director. While advising students has been a substantial part
                  of my career, I have reached a point where I feel the need to
                  explore fresh avenues and transition into a new and exciting
                  field.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>My coding journey</Accordion.Header>
              <Accordion.Body>
                <h6>The start of coding</h6>
                <p>
                  As a beginner coder, I find myself at the crossroads of
                  excitement and fear as I embrace the challenge of venturing
                  into a new industry. To embark on this thrilling journey, I've
                  made the decision to enroll in a coding bootcamp offered by
                  Northwestern. Instead of pursuing a conventional four-year
                  degree or solely relying on self-learning, I've chosen this
                  alternative path to bridge the knowledge gap in a more
                  concentrated and purposeful manner. The intensive and focused
                  learning experience provided by the bootcamp is equipping me
                  with the skills and knowledge necessary to excel in this
                  rapidly evolving field. By taking this leap, I aim to lay a
                  solid foundation for my coding journey and unlock a world of
                  possibilities in the tech industry.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How you can contact me</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </section>
      </section>
    </>
  );
}

export default AboutMe;
