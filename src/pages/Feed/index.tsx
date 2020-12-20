/* eslint-disable */
import React from "react";
import { Container, Main, Side } from "./styles";
import Header from '../../components/Header';

const Feed: React.FC = () => {
  return (
    <>
      <Header/>
      <Container>
        <Main>
          Feed
        </Main>
        <Side>
            Side
        </Side>
      </Container>
    </>
  );
};

export default Feed;
