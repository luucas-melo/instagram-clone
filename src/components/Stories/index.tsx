import React, { useContext } from "react";
import { Container } from "./styles";


const Stories: React.FC = () => {
  const users = [
    "luucas-melo",
    "carlos-504",
    "pedroholiveira1998",
    "pedroborba05",
    "Italo-Neves",
  ];
  return (
    <Container>
      {users.map((user) => (
        <>
          <Container.Stories>
            <img src={`https://github.com/${user}.png`} alt="stories" />
          </Container.Stories>
          <Container.Stories>
            <img src={`https://github.com/${user}.png`} alt="stories" />
          </Container.Stories>
        </>
      ))}
    </Container>
  );
};

export default Stories;
