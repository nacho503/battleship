import React, { useState, useContext } from "react";
import styled, { css } from "styled-components";
import enemyGameBoard from "../components/EnemyGameBoard";
import { YAxis } from "./YAxis";

import { Context } from "../store/appContext";
import { XAxis } from "./XAxis";

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
    ${(props) =>
    props.isSelected &&
    css`
      background-color: orange;
    `}
`;

const BattleGridsContainerGridY = styled.div`
  display: flex;
`;

const BattleGridsContainerGridX = styled.div`
  display: flex;
  flex-direction: column;
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

const FireCoordinatesX = styled.input`
  width: 5rem;
`;
const FireCoordinatesY = styled.input`
  width: 5rem;
`;

const FireDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 5rem;
`;

const CompBattleGrid = () => {
  const { actions } = useContext(Context);
  let [enemyArray, setEnemyArray] = useState(enemyGameBoard);
  let [fireX, setFireX] = useState("");
  let [fireY, setFireY] = useState("");

  let fireButtonClick = (x, y) => {
    const newArray = [...enemyArray];
    if (enemyArray[x][y] === 1) {
      newArray[x][y] = 3;
      setEnemyArray(newArray);
      console.log(enemyArray);
    } else if (enemyArray[x][y] === 0) {
      newArray[x][y] = 2;
      setEnemyArray(newArray);
    }
    setFireX("");
    setFireY("");

    enemyTargetGen();
  };

  let enemyTargetGen = () => {
    let xEnemy = Math.floor(Math.random() * 10);
    let yEnemy = Math.floor(Math.random() * 10);
    actions.setCompTarget(xEnemy, yEnemy);
  };

  return (
    <>
      <FireDiv>
        <FireButton onClick={() => fireButtonClick(fireX, fireY)}>
          Fire!
        </FireButton>
        <br></br>
        <label>X 0-9:</label>
        <FireCoordinatesX
          value={fireX}
          onChange={(e) => {
            setFireX(e.target.value);
          }}
        ></FireCoordinatesX>
        <label>Y 0-9:</label>
        <FireCoordinatesY
          value={fireY}
          onChange={(e) => {
            setFireY(e.target.value);
          }}
        ></FireCoordinatesY>
      </FireDiv>
      <BattleGridsContainerGridX>
        <XAxis></XAxis>
        <BattleGridsContainerGridY>
          <YAxis />
          <CompGridsContainer>
            {enemyArray[0].map((ele, key) => {
              return (
                <GridSqrSea
                  onClick={() => {
                    setFireY(key);
                    setFireX(0);
                  }}
                  key={key}
                  isHit={ele === 3 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
            {enemyArray[1].map((ele, key) => {
              return (
                <GridSqrSea
                  onClick={() => {
                    setFireY(key);
                    setFireX(1);
                  }}
                  key={key}
                  isHit={ele === 3 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
            {enemyArray[2].map((ele, key) => {
              return (
                <GridSqrSea
                  onClick={() => {
                    setFireY(key);
                    setFireX(2);
                  }}
                  key={key}
                  isHit={ele === 3 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
            {enemyArray[3].map((ele, key) => {
              return (
                <GridSqrSea
                  onClick={() => {
                    setFireY(key);
                    setFireX(3);
                  }}
                  key={key}
                  isHit={ele === 3 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
            {enemyArray[4].map((ele, key) => {
              return (
                <GridSqrSea
                  onClick={() => {
                    setFireY(key);
                    setFireX(4);
                  }}
                  key={key}
                  isHit={ele === 3 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
            {enemyArray[5].map((ele, key) => {
              return (
                <GridSqrSea
                  onClick={() => {
                    setFireY(key);
                    setFireX(5);
                  }}
                  key={key}
                  isHit={ele === 3 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
            {enemyArray[6].map((ele, key) => {
              return (
                <GridSqrSea
                  onClick={() => {
                    setFireY(key);
                    setFireX(6);
                  }}
                  key={key}
                  isHit={ele === 3 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
            {enemyArray[7].map((ele, key) => {
              return (
                <GridSqrSea
                  onClick={() => {
                    setFireY(key);
                    setFireX(7);
                  }}
                  key={key}
                  isHit={ele === 3 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
            {enemyArray[8].map((ele, key) => {
              return (
                <GridSqrSea
                  onClick={() => {
                    setFireY(key);
                    setFireX(8);
                  }}
                  key={key}
                  isHit={ele === 3 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
            {enemyArray[9].map((ele, key) => {
              return (
                <GridSqrSea
                  onClick={() => {
                    setFireY(key);
                    setFireX(9);
                  }}
                  key={key}
                  isHit={ele === 3 ? true : false}
                  wasMissed={ele === 2 ? true : false}
                >
                  <p>{ele}</p>
                </GridSqrSea>
              );
            })}
          </CompGridsContainer>
        </BattleGridsContainerGridY>
      </BattleGridsContainerGridX>
    </>
  );
};

export default CompBattleGrid;
