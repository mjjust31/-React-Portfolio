import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Portfolio.scss";
import Project1 from "/src/components/portfolio/images/Project1.png";
import { productData } from "../../utils/projectData";

function Portfolio() {
  const [index, setIndex] = useState(0);
  // console.log(productData);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const carouselItems = productData.map((item) => (
    <Carousel.Item key={item.id} className="project-display">
      <img src={item.filepath} alt={item.alt} />
      <Carousel.Caption className="carousel-background">
        <a>{item.title}</a>
        <p>{item.description}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <Carousel
      className="custom-carousel"
      activeIndex={index}
      onSelect={handleSelect}>
      {carouselItems}
    </Carousel>
  );
}

export default Portfolio;
