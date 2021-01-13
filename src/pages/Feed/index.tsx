/* eslint-disable */
import React from "react";
import { Container, Main, Side } from "./styles";
import Header from "../../components/Header";
import Stories from "../../components/Stories";
import FeedPost from "../../components/FeedPost";
import getUsersArray from "../../utils/getUsersArray";
import { useSelector } from "react-redux";
import { StoreState } from "../../store/store";

const Feed: React.FC = () => {
  const { usersPosts } = useSelector((state: StoreState) => state.post);
  const users = getUsersArray();
  return (
    <>
      <Header />
      <Container>
        <Main>
          <Stories />
          {usersPosts.map((post: any) => (
            <FeedPost user={post.userName} isLiked={post.isLiked} />
          ))}
        </Main>
        <Side>Side</Side>
      </Container>
    </>
  );
};

export default Feed;
