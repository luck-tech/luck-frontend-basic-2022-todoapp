import React from "react";
import styled from "styled-components";
import TodoCard from "../../Organisms/TodoCard/index.jsx";
import Title from "../../Atoms/Title/index.jsx";
import BREAKPOINT from "../../../variables/breakpoint.js";

const MainPage = () => {
  return (
    <StyledWrapper>
      <Title />
      <TodoCard />
    </StyledWrapper>
  );
};

export default MainPage;

const StyledWrapper = styled.div`
  padding: 60px 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    padding: 20px;
  }
`;
