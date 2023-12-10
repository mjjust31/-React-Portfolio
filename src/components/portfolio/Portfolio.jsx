import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Portfolio.scss";
import Project1 from "/src/components/portfolio/images/Project1.png";
// import Project2 from "/src/components/portfolio/images/Project2.png";
// import Project3 from "/src/components/portfolio/images/Project3.png";
// import Project4 from "/src/components/portfolio/images/Project4.png";
// import Project5 from "/src/components/portfolio/images/Project5.png";
// import Project6 from "/src/components/portfolio/images/Project6.png";

function Portfolio() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      className="custom-carousel"
      activeIndex={index}
      onSelect={handleSelect}>
      <Carousel.Item className="project-display">
        <img
          src={Project1}
          // style={{ width: 300, marginLeft: "auto", marginRight: "auto" }}
          text="First slide"
        />
        <Carousel.Caption className ='carousel-background'>
          <a>Movie, Mocktails, and Martinis</a>
          <p>First group project and learning to fetch data from an API</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Portfolio;
