import React, { useState } from "react";
import styled from "styled-components";
import CheckBox from "../../Atoms/Checkbox/index.jsx";
import Input from "../../Atoms/Input/index.jsx";
import EditButton from "../../Atoms/EditButton/index";

const Task = ({ onTaskChange, onTaskComplete, taskName, defaultIsEditing }) => {
  const [isEditing, setisEditing] = useState(defaultIsEditing);
  const onEditComplete = (value) => {
    setisEditing(false);
    onTaskChange(value);
  };
  const onEditButtonClick = () => {
    setisEditing(true);
  };
  if (isEditing === "true") {
    return (
      <StyledWrraper>
        <StyledCheckBoxWrapper>
          <CheckBox onClick={onTaskComplete}></CheckBox>
        </StyledCheckBoxWrapper>
        <Input onEditComplete={taskName}></Input>
      </StyledWrraper>
    );
  } else {
    <StyledWrraper>
      <StyledCheckBoxWrapper>
        <CheckBox onClick={onTaskComplete}></CheckBox>
      </StyledCheckBoxWrapper>
      <StyledNameAndButtonWrapper>
        <StyledTaskName>{taskName}</StyledTaskName>
        <StyledEditButtonWrapper>
          <EditButton onClick={onEditButtonClick()}></EditButton>
        </StyledEditButtonWrapper>
      </StyledNameAndButtonWrapper>
    </StyledWrraper>;
  }
};

export default Task;

const StyledWrraper = styled.div``;
const StyledCheckBoxWrapper = styled.div``;
const StyledNameAndButtonWrapper = styled.div``;
const StyledTaskName = styled.div``;
const StyledEditButtonWrapper = styled.div``;
