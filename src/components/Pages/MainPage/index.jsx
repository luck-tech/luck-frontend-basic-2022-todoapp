import React from "react";
import styled from "styled-components";
import TodoCard from "../../Organisms/TodoCard/index.jsx";
import Title from "../../Atoms/Title/index.jsx";

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
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
`;
