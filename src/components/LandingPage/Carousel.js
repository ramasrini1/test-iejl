import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselItems from "./CarouselItems";

export default function ControlledCarousel() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    fetch("https://614478eb411c860017d254d4.mockapi.io/IEJL")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Carousel activeIndex={index} indicators={false} timeInterval={4000} onSelect={handleSelect}>
      {data.map((story, index) => (
        <Carousel.Item key={index}>
          <CarouselItems {...story} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
