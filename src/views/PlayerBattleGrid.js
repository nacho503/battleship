import React, { useState } from "react";
import styled, { css } from "styled-components";
import gameBoard from "../components/GameBoard";
import FireModal from "../components/FireModal";

const PlayerGridsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 15rem;
`;

const FireDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const GridSqrSea = styled.div`
  box-sizing: border-box;
  background-color: #1ca3ec;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0px;
  border: 0.5px solid #f0f8ff;
`;

const FireButton = styled.button`
  height: 5rem;
  width: 5rem;
  border-radius: 5rem;
  border-color: #aa0000;
  background-color: #ef0107;
  color: white;
  font-family: "Bangers", cursive;
  font-size: 2rem;
  &:hover {
    background-color: #aa0000;
    cursor: pointer;
  }
`;

const CoordinatesModal = styled.input``;

const PlayerBattleGrid = () => {
  let [isShip, setIsShip] = useState(false);
  let [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <PlayerGridsContainer>
        {gameBoard[0].map((ele, key) => {
          return <GridSqrSea key={key}>{ele}</GridSqrSea>;
        })}
        {gameBoard[1].map((ele, key) => {
          return <GridSqrSea key={key}>{ele}</GridSqrSea>;
        })}
        {gameBoard[2].map((ele, key) => {
          return <GridSqrSea key={key}>{ele}</GridSqrSea>;
        })}
        {gameBoard[3].map((ele, key) => {
          return <GridSqrSea key={key}>{ele}</GridSqrSea>;
        })}
        {gameBoard[4].map((ele, key) => {
          return <GridSqrSea key={key}>{ele}</GridSqrSea>;
        })}
        {gameBoard[5].map((ele, key) => {
          return <GridSqrSea key={key}>{ele}</GridSqrSea>;
        })}
        {gameBoard[6].map((ele, key = { key }) => {
          return <GridSqrSea key={key}>{ele}</GridSqrSea>;
        })}
        {gameBoard[7].map((ele, key) => {
          return <GridSqrSea key={key}>{ele}</GridSqrSea>;
        })}
        {gameBoard[8].map((ele, key) => {
          return <GridSqrSea key={key}>{ele}</GridSqrSea>;
        })}
        {gameBoard[9].map((ele, key) => {
          return <GridSqrSea key={key}>{ele}</GridSqrSea>;
        })}
      </PlayerGridsContainer>
      <FireDiv>
        <FireButton onClick={openModal}>Fire!</FireButton>
        <FireModal showModal={showModal} setShowModal={setShowModal} />
      </FireDiv>
    </>
  );
};

export default PlayerBattleGrid;
