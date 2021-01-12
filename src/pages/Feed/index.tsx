/* eslint-disable */
import React from "react";
import { Container, Main, Side, Posts } from "./styles";
import Header from '../../components/Header';
import Stories from '../../components/Stories';

const Feed: React.FC = () => {
  return (
    <>
      <Header/>
      <Container>
        <Main>
          <Stories />
          <Posts />
        </Main>
        <Side>
            Side
        </Side>
      </Container>
    </>
  );
};

export default Feed;
