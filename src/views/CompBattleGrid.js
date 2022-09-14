import React, { useState } from "react";
import styled, { css } from "styled-components";
import enemyGameBoard from "../components/GameBoard";

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
  let [enemyArray, setEnemyArray] = useState(enemyGameBoard);
  let [fireX, setFireX] = useState("");
  let [fireY, setFireY] = useState("");

  let fireButtonClick = (x, y) => {
    console.log(x, y);
    const newArray = [...enemyArray];
    if (enemyArray[x][y] > 0) {
      console.log("You hitted");
      newArray[x][y] = 3;
      setEnemyArray(newArray);
      console.log(enemyArray);
    } else if (enemyArray[x][y] == 0) {
      console.log("Missed");
      newArray[x][y] = 2;
      setEnemyArray(newArray);
    }
    setFireX("");
    setFireY("");
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

      <CompGridsContainer>
        {enemyArray[0].map((ele, key) => {
          return (
            <GridSqrSea
              key={key}
              isHit={ele == 3 ? true : false}
              wasMissed={ele == 2 ? true : false}
            >
              <p>{ele}</p>
            </GridSqrSea>
          );
        })}
        {enemyArray[1].map((ele, key) => {
          return (
            <GridSqrSea
              key={key}
              isHit={ele == 3 ? true : false}
              wasMissed={ele == 2 ? true : false}
            >
              <p>{ele}</p>
            </GridSqrSea>
          );
        })}
        {enemyArray[2].map((ele, key) => {
          return (
            <GridSqrSea
              key={key}
              isHit={ele == 3 ? true : false}
              wasMissed={ele == 2 ? true : false}
            >
              <p>{ele}</p>
            </GridSqrSea>
          );
        })}
        {enemyArray[3].map((ele, key) => {
          return (
            <GridSqrSea
              key={key}
              isHit={ele == 3 ? true : false}
              wasMissed={ele == 2 ? true : false}
            >
              <p>{ele}</p>
            </GridSqrSea>
          );
        })}
        {enemyArray[4].map((ele, key) => {
          return (
            <GridSqrSea
              key={key}
              isHit={ele == 3 ? true : false}
              wasMissed={ele == 2 ? true : false}
            >
              <p>{ele}</p>
            </GridSqrSea>
          );
        })}
        {enemyArray[5].map((ele, key) => {
          return (
            <GridSqrSea
              key={key}
              isHit={ele == 3 ? true : false}
              wasMissed={ele == 2 ? true : false}
            >
              <p>{ele}</p>
            </GridSqrSea>
          );
        })}
        {enemyArray[6].map((ele, key = { key }) => {
          return (
            <GridSqrSea
              key={key}
              isHit={ele == 3 ? true : false}
              wasMissed={ele == 2 ? true : false}
            >
              <p>{ele}</p>
            </GridSqrSea>
          );
        })}
        {enemyArray[7].map((ele, key) => {
          return (
            <GridSqrSea
              key={key}
              isHit={ele == 3 ? true : false}
              wasMissed={ele == 2 ? true : false}
            >
              <p>{ele}</p>
            </GridSqrSea>
          );
        })}
        {enemyArray[8].map((ele, key) => {
          return (
            <GridSqrSea
              key={key}
              isHit={ele == 3 ? true : false}
              wasMissed={ele == 2 ? true : false}
            >
              <p>{ele}</p>
            </GridSqrSea>
          );
        })}
        {enemyArray[9].map((ele, key) => {
          return (
            <GridSqrSea
              key={key}
              isHit={ele == 3 ? true : false}
              wasMissed={ele == 2 ? true : false}
            >
              <p>{ele}</p>
            </GridSqrSea>
          );
        })}
      </CompGridsContainer>
    </>
  );
};

export default CompBattleGrid;
