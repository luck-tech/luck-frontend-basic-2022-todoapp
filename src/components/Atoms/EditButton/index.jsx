import pencil from "../../../assets/svg/pencil.svg";
import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";

const EditButton = (props) => {
  return (
    <StyledButton onClick={props.onClick}>
      <ButtonCircle></ButtonCircle>
      <img src={pencil} />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
`;

const ButtonCircle = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  cursor: pointer;
  &:hover {
    background-color: ${COLOR.LIGHT_GRAY};
    width: 24px;
    height: 24px;
    opacity: 0.2;
    position: absolute;
    border-radius: 50%;
  }
`;

export default EditButton;
