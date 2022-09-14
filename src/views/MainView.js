import React from "react";
import styled, { css } from "styled-components";
import PlayerBattleGrid from "./PlayerBattleGrid";
import CompBattleGrid from "./CompBattleGrid";

//Controls Container
const ControlsContainer = styled.div`
  background-color: black;
  height: 80px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10rem;
`;

const Blogo = styled.h1`
  color: white;
  font-family: "Montserrat", sans-serif;
  /* font-family: "Bangers", cursive; */
`;

const NewGameButton = styled.button``;

//End Controls Container

const BattleGridsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ControlsContainerView = () => {
  //probar hacer la variable aki del styled component

  return (
    <>
      <ControlsContainer>
        <Blogo>BATTLESHIP</Blogo>
      </ControlsContainer>
      <BattleGridsContainer>
        <PlayerBattleGrid />
        <CompBattleGrid />
      </BattleGridsContainer>
    </>
  );
};

export default ControlsContainerView;
