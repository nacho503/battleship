import React from "react";
import styled from "styled-components";
import PlayerBattleGrid from "./PlayerBattleGrid";
import CompBattleGrid from "./CompBattleGrid";
import bkg from "../img/bkg.jpg";

//Controls Container
const ControlsContainer = styled.div`
  background-color: black;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10rem;
  @media (max-width: 768px) {
    margin-bottom: 5rem;
  }
`;

const Blogo = styled.h1`
  color: white;
  font-family: "Montserrat", sans-serif;
  /* font-family: "Bangers", cursive; */
`;

//End Controls Container

const BattleGridsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  /* background-image: url(${bkg}); */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
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
