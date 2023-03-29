import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color.js";
import TEXT from "../../../variables/texts.js";
import BREAKPOINT from "../../../variables/breakpoint.js";

const Alert = ({ visible, errorText }) => {
  return (
    <StyledAlert visible={visible}>
      <StyledAlertText>{errorText}</StyledAlertText>
    </StyledAlert>
  );
};

export default Alert;

const StyledAlert = styled.div`
  position: absolute;
  width: 400px;
  top: 80px;
  border-radius: 4px;
  background-color: ${COLOR.RED};
  transition: all 0.5s ease 0s;
  opacity: ${(visible) => (visible ? "0" : "1")};
  transform: ${(visible) => (visible ? "none" : "translateY(-20px)")}
  color: ${COLOR.WHITE};
  padding: 10px 20px;
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    max-width: 280px;
    top: 40px;
  }
`;

const StyledAlertText = styled.p`
  color: ${COLOR.WHITE};
  margin: 0px;
  ${TEXT.S};
`;
