import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color.js";
import TEXT from "../../../variables/texts.js";
import BREAKPOINT from "../../../variables/breakpoint.js";

const Alert = ({ visible, errorText }) => {
  return <StyledAlert visible={visible}>{errorText}</StyledAlert>;
};

export default Alert;

const StyledAlert = styled.div`
  margin: 0 auto;
  width: 400px;
  top: 80px;
  height: 40px;
  border-radius: 4px;
  background-color: ${COLOR.RED};
  transition: all 0.5s ease 0s;
  opacity: ${(visible) => (visible ? "1" : "0")};
  transform: ${(visible) => (visible ? "translateY(-20px);" : "none")};
  color: ${COLOR.WHITE};
  padding: 10px 20px;
  ${TEXT.S};
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    max-width: 280px;
    top: 40px;
  }
`;
