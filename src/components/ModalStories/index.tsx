import React from "react";
import { Container, Modal, Content } from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { setStoryVisible } from "../../store/modules/story/actions";
import { AiOutlineClose, AiOutlineInstagram } from "react-icons/ai";


interface ModalStoriesProps {
  story?: string;
}
const ModalStories: React.FC<ModalStoriesProps> = ({
  story,
}: ModalStoriesProps) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Modal>
        <AiOutlineClose className="close-icon" size={30} onClick={() => dispatch(setStoryVisible())} />
        <AiOutlineInstagram className="instagram-icon" size={30} />
        <Content>
          <img src={story} alt="story" />
        </Content>
      </Modal>
    </Container>
  );
};

export default ModalStories;
