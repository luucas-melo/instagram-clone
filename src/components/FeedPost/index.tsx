import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { store, StoreState } from "../../store/store";
import { BsThreeDots } from "react-icons/bs";
import { setPostLike } from "../../store/modules/post/actions";
import {
  Container,
  Title,
  Image,
  Options,
  PostComments,
  InteractionIcons,
  SaveIcon,
} from "./styles";
import { AiOutlineHeart, AiOutlineSave, AiFillHeart } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";

interface FeedPostProps {
  user: string;
  isLiked: boolean;
}
const FeedPost: React.FC<FeedPostProps> = ({
  user,
  isLiked,
}: FeedPostProps) => {
  const dispatch = useDispatch();
  
  return (
    <Container>
      <Title>
        <Title.Image>
          <img src={`https://github.com/${user}.png`} alt="userImage" />
          <span>{user}</span>
        </Title.Image>
        <Options>
          <BsThreeDots size={20} />
        </Options>
      </Title>
      <Image>
        <img src={`https://github.com/${user}.png`} alt="userImage" />
      </Image>

      <PostComments>
        <PostComments.Icons>
          <InteractionIcons>
            {isLiked ? (
              <AiFillHeart
                size={28}
                onClick={() =>
                  dispatch(setPostLike({ likedPost: user }))
                }
                fill="#e03d3d"
              />
            ) : (
              <AiOutlineHeart
                size={28}
                onClick={() =>
                  dispatch(setPostLike({ likedPost: user }))
                }
              />
            )}
            <FaRegCommentDots size={28} />
            <IoPaperPlaneOutline size={28} />
          </InteractionIcons>
          <SaveIcon>
            <AiOutlineSave size={28} />
          </SaveIcon>
        </PostComments.Icons>
      </PostComments>
    </Container>
  );
};

export default FeedPost;
