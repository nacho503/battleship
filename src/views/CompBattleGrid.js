import React from "react";
import styled, { css } from "styled-components";
import gameBoard from "../components/GameBoard";

const CompGridsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 15rem;
`;

const GridSqrSea = styled.div`
  box-sizing: border-box;
  background-color: #a9a9a9;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0px;
  border: 0.5px solid #f0f8ff;
  p {
    visibility: hidden;
  }
`;

const CompBattleGrid = () => {
  return (
    <CompGridsContainer>
      {gameBoard[0].map((ele, key) => {
        return (
          <GridSqrSea key={key}>
            <p>{ele}</p>
          </GridSqrSea>
        );
      })}
      {gameBoard[1].map((ele, key) => {
        return (
          <GridSqrSea key={key}>
            <p>{ele}</p>
          </GridSqrSea>
        );
      })}
      {gameBoard[2].map((ele, key) => {
        return (
          <GridSqrSea key={key}>
            <p>{ele}</p>
          </GridSqrSea>
        );
      })}
      {gameBoard[3].map((ele, key) => {
        return (
          <GridSqrSea key={key}>
            <p>{ele}</p>
          </GridSqrSea>
        );
      })}
      {gameBoard[4].map((ele, key) => {
        return (
          <GridSqrSea key={key}>
            <p>{ele}</p>
          </GridSqrSea>
        );
      })}
      {gameBoard[5].map((ele, key) => {
        return (
          <GridSqrSea key={key}>
            <p>{ele}</p>
          </GridSqrSea>
        );
      })}
      {gameBoard[6].map((ele, key = { key }) => {
        return (
          <GridSqrSea key={key}>
            <p>{ele}</p>
          </GridSqrSea>
        );
      })}
      {gameBoard[7].map((ele, key) => {
        return (
          <GridSqrSea key={key}>
            <p>{ele}</p>
          </GridSqrSea>
        );
      })}
      {gameBoard[8].map((ele, key) => {
        return (
          <GridSqrSea key={key}>
            <p>{ele}</p>
          </GridSqrSea>
        );
      })}
      {gameBoard[9].map((ele, key) => {
        return (
          <GridSqrSea key={key}>
            <p>{ele}</p>
          </GridSqrSea>
        );
      })}
    </CompGridsContainer>
  );
};

export default CompBattleGrid;
