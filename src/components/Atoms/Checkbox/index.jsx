import check from "../../../assets/svg/check.svg";
import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";

const Checkbox = ({ onClick }) => {
  return (
    <StyledCB onClick={onClick}>
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
  position: absolute;
  border: 2px solid ${COLOR.LIGHT_GRAY};
  border-radius: 2px;
  &:hover img {
    display: block;
  }
  & > img {
    width: 15px;
    height: 15px;
    display: none;
  }
`;

export default Checkbox;
