/* eslint-disable */
import React from "react";
import { Container, Main, Side } from "./styles";
import Header from '../../components/Header';
import Stories from '../../components/Stories';
const Feed: React.FC = () => {
  return (
    <>
      <Header/>
      <Container>
        <Main>
          <Stories />
        </Main>
        <Side>
            Side
        </Side>
      </Container>
    </>
  );
};

export default Feed;
