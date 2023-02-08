import React, { useState, useContext, useEffect } from "react";
import styled, { css } from "styled-components";
import gameBoard from "../components/GameBoard";
import { YAxis } from "./YAxis";
import { XAxis } from "./XAxis";

import { Context } from "../store/appContext";

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

  p {
    visibility: hidden;
  }

  ${(props) =>
    props.isaShip &&
    css`
      background-color: #006a4e;
    `}

  ${(props) =>
    props.isHit &&
    css`
      background-color: red;
    `}

    ${(props) =>
    props.wasMissed &&
    css`
      background-color: yellow;
    `}
`;

const BattleGridsContainerGridY = styled.div`
  display: flex;
`;

const BattleGridsContainerGridX = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  font-weight: bold;
`;

const PlayerBattleGrid = () => {
  const { store } = useContext(Context);
  let [playerArr, setPlayerArr] = useState(gameBoard);

  useEffect(() => {
    let enemyX = store.compTarget[0];
    let enemyY = store.compTarget[1];
    let displayedArr = [...playerArr];
    if (store.compTarget.length !== 0 && displayedArr[enemyX][enemyY] === 1) {
      displayedArr[enemyX][enemyY] = 3;
      setPlayerArr(displayedArr);
    } else if (
      store.compTarget.length !== 0 &&
      displayedArr[enemyX][enemyY] === 0
    ) {
      displayedArr[enemyX][enemyY] = 2;
      setPlayerArr(displayedArr);
    }
  }, [playerArr, store.compTarget]);

  return (
    <>
      <BattleGridsContainerGridX>
        Player
        <XAxis></XAxis>
        <BattleGridsContainerGridY>
          <YAxis></YAxis>
          <PlayerGridsContainer>
            {playerArr[0].map((ele, key) => {
              return (
                <GridSqrSea
                  key={key}
                  isaShip={ele === 1 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                  isHit={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
            {playerArr[1].map((ele, key) => {
              return (
                <GridSqrSea
                  key={key}
                  isaShip={ele === 1 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                  isHit={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
            {gameBoard[2].map((ele, key) => {
              return (
                <GridSqrSea
                  key={key}
                  isaShip={ele === 1 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                  isHit={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
            {gameBoard[3].map((ele, key) => {
              return (
                <GridSqrSea
                  key={key}
                  isaShip={ele === 1 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                  isHit={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
            {playerArr[4].map((ele, key) => {
              return (
                <GridSqrSea
                  key={key}
                  isaShip={ele === 1 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                  isHit={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
            {playerArr[5].map((ele, key) => {
              return (
                <GridSqrSea
                  key={key}
                  isaShip={ele === 1 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                  isHit={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
            {playerArr[6].map((ele, key) => {
              return (
                <GridSqrSea
                  key={key}
                  isaShip={ele === 1 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                  isHit={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
            {playerArr[7].map((ele, key) => {
              return (
                <GridSqrSea
                  key={key}
                  isaShip={ele === 1 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                  isHit={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
            {playerArr[8].map((ele, key) => {
              return (
                <GridSqrSea
                  key={key}
                  isaShip={ele === 1 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                  isHit={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
            {playerArr[9].map((ele, key) => {
              return (
                <GridSqrSea
                  key={key}
                  isaShip={ele === 1 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                  isHit={ele === 3 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
          </PlayerGridsContainer>
        </BattleGridsContainerGridY>
      </BattleGridsContainerGridX>
    </>
  );
};

export default PlayerBattleGrid;
