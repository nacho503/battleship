import React, { useState } from "react";
import styled, { css } from "styled-components";
import gameBoard from "../components/GameBoard";

const PlayerGridsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 15rem;
`;

const GridSqrSea = styled.div`
  box-sizing: border-box;
  background-color: #1ca3ec;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0px;
  border: 0.5px solid #f0f8ff;
`;

const PlayerBattleGrid = () => {
  let [isShip, setIsShip] = useState(false);

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
    </>
  );
};

export default PlayerBattleGrid;
