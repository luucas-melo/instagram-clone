import React, { useContext } from "react";
import { Container } from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Stories: React.FC = () => {
  const users = [
    "luucas-melo",
    "carlos-504",
    "pedroholiveira1998",
    "pedroborba05",
    "Italo-Neves",
    "Matheus73",
    "luucas-melo",
    "carlos-504",
    "pedroholiveira1998",
    "pedroborba05",
    "Italo-Neves",
    "Matheus73"
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 4,
  };
  return (
    <Container>
      <Slider {...settings}>
      {users.map((user) => (
        <Container.Stories>
            <img src={`https://github.com/${user}.png`} alt="stories" />
        </Container.Stories>
      ))}
      </Slider>
    </Container>
  );
};

export default Stories;
