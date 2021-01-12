import React, { useEffect } from "react";
import { Container } from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalStories from "../../components/ModalStories";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../../store/store";
import {
  setStoryVisible,
  setCurrentStory,
} from "../../store/modules/story/actions";
import { EventEmitter } from "events";
import { EventChannel } from "redux-saga";

const Stories: React.FC = () => {
  // function handleChoice(currentStory: string) {
  //   console.log(currentStory)
  // }
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
    "Matheus73",
  ];
  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 8,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
    ],
  };

  const { visible } = useSelector((state: StoreState) => state.story);
  const { currentStory } = useSelector((state: StoreState) => state.story);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(visible);
  }, [visible]);
  return (
    <Container>
      {visible ? (
        <ModalStories
          story={`https://github.com/${currentStory}.png`}
        ></ModalStories>
      ) : null}
      <Slider {...settings}>
        {users.map((user) => (
          <Container.Stories key={user}>
            <img
              src={`https://github.com/${user}.png`}
              alt="stories"
              onClick={() => {
                dispatch(setStoryVisible());
                dispatch(setCurrentStory({ currentStory: user }));
              }}
            />
          </Container.Stories>
        ))}
      </Slider>
    </Container>
  );
};

export default Stories;
