import React, { useState } from "react";
import styled from "styled-components";
import CheckBox from "../../Atoms/Checkbox/index.jsx";
import Input from "../../Atoms/Input/index.jsx";
import EditButton from "../../Atoms/EditButton/index";
import COLOR from "../../../variables/color";
import BREAKPOINT from "../../../variables/breakpoint.js";

const Task = ({ onTaskChange, onTaskComplete, taskName, defaultIsEditing }) => {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);
  const onEditComplete = (value) => {
    setIsEditing(false);
    onTaskChange(value);
  };
  const onEditButtonClick = () => {
    setIsEditing(true);
  };
  return (
    <StyledTask>
      <div>
        <CheckBox onClick={onTaskComplete}></CheckBox>
      </div>
      {isEditing ? (
        <StyledInputWrapper>
          <Input
            onEditComplete={onEditComplete}
            defaultValue={taskName}
          ></Input>
        </StyledInputWrapper>
      ) : (
        <StyledNameAndButtonWrapper>
          <StyledTaskName>{taskName}</StyledTaskName>
          <StyledEditButton>
            <EditButton onClick={() => onEditButtonClick()}></EditButton>
          </StyledEditButton>
        </StyledNameAndButtonWrapper>
      )}
    </StyledTask>
  );
};

export default Task;

const StyledTask = styled.div`
  padding-top: 10px;
`;
const StyledNameAndButtonWrapper = styled.div`
  display: flex;
  padding-left: 30px;
  height: 20px;
  width: 450px;
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    width: 230px;
  }
`;
const StyledTaskName = styled.div`
  color: ${COLOR.LIGHT_GRAY};
  line-height: 20px;
`;
const StyledEditButton = styled.div`
  margin-left: auto;
`;
const StyledInputWrapper = styled.div`
  line-height: 20px;
  display: flex;
  padding-left: 30px;
`;
