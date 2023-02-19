import pencil from "../../../assets/svg/pencil.svg";
import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";

const EditButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <ButtonCircle></ButtonCircle>
      <img src={pencil} />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  width: 20px;
  height: 20px;
  & > img {
    width: 100%;
    height: 100%;
  }
`;

const ButtonCircle = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  cursor: pointer;
  &:hover {
    background-color: ${COLOR.LIGHT_GRAY};
    width: 20px;
    height: 20px;
    opacity: 0.2;
    position: absolute;
    border-radius: 50%;
  }
`;

export default EditButton;
