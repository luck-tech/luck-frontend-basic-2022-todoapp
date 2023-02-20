import check from "../../../assets/svg/check.svg";
import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";

const Checkbox = ({ onClick }) => {
  return (
    <StyledCB onClick={onClick}>
      <BoxFrame />
      <img src={check} />
    </StyledCB>
  );
};

const StyledCB = styled.button`
  padding: 0;
  border: none;
  width: 20px;
  height: 20px;
  background-color: transparent;
  position: relative;
  & > img {
    width: 15px;
    height: 15px;
    top: 2.5px;
    left: 2.5px;
    position: absolute;
    &:hover {
      display: none;
    }
  }
`;

const BoxFrame = styled.div`
  border: 2px solid ${COLOR.LIGHT_GRAY};
  border-radius: 2px;
  width: 20px;
  height: 20px;
`;

export default Checkbox;
