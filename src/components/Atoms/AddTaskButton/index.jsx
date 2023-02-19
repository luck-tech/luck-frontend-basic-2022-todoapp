import plus from "../../../assets/svg/plus.svg";
import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";

const AddTaskButton = ({ onClick }) => {
  return (
    <StyledATB onClick={onClick}>
      <ButtonShadow />
      <img src={plus} />
      <h2>タスクを追加</h2>
    </StyledATB>
  );
};

const StyledATB = styled.button`
  display: flex;
  justify-content: center;
  background-color: transparent;
  border: 0;
  position: relative;
  & > h2 {
    color: ${COLOR.GREEN};
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin: 0;
    padding-left: 10px;
  }
  & > img {
    width: 20px;
    height: 20px;
  }
`;

const ButtonShadow = styled.div`
  width: 126px;
  height: 24px;
  position: absolute;
  cursor: pointer;
  padding: 2px 6px;
  top: -1px;
  &:hover {
    background-color: ${COLOR.GREEN};
    opacity: 0.2;
    border-radius: 12px;
  }
`;

export default AddTaskButton;
