import React, { useState } from "react";
import styled from "styled-components";
import CheckBox from "../../Atoms/Checkbox/index.jsx";
import Input from "../../Atoms/Input/index.jsx";
import EditButton from "../../Atoms/EditButton/index";
import COLOR from "../../../variables/color";

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
    <StyledWrraper>
      <StyledCheckBoxWrapper>
        <CheckBox onClick={onTaskComplete}></CheckBox>
      </StyledCheckBoxWrapper>
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
          <StyledEditButtonWrapper>
            <EditButton onClick={() => onEditButtonClick()}></EditButton>
          </StyledEditButtonWrapper>
        </StyledNameAndButtonWrapper>
      )}
    </StyledWrraper>
  );
};

export default Task;

const StyledWrraper = styled.div``;
const StyledCheckBoxWrapper = styled.div`
  position: absolute;
`;
const StyledNameAndButtonWrapper = styled.div`
  display: flex;
`;
const StyledTaskName = styled.div`
  color: ${COLOR.LIGHT_GRAY};
  position: relative;
  left: 30px;
  line-height: 20px;
`;
const StyledEditButtonWrapper = styled.div`
  position: relative;
  left: 157px;
`;
const StyledInputWrapper = styled.div`
  line-height: 20px;
  position: relative;
  left: 30px;
`;
