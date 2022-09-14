import React, { useState } from "react";
import styled, { css } from "styled-components";

const FireModal = ({ showModal, setShowModal }) => {
  return <>{showModal ? <div>Modal</div> : null}</>;
};

export default FireModal;
