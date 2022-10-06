import React from "react";
import YcoordsArr from "../components/YAxisCoordinates";
import styled from "styled-components";

const GridCoord = styled.div`
  box-sizing: border-box;
  background-color: #585858;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0px;
  border: 0.5px solid #f0f8ff;
  p {
    visibility: visible;
    font-size: 0.8rem;
    margin: 0;
    text-align: center;
    color: white;
  }
`;

const GridCoordContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const YAxis = () => {
  return (
    <GridCoordContainer>
      {YcoordsArr.map((ele, key) => {
        return (
          <GridCoord key={key}>
            <p>{ele}</p>
          </GridCoord>
        );
      })}
    </GridCoordContainer>
  );
};
