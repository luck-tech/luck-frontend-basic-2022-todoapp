import React, { useState } from "react";
import styled from "styled-components";
import AddTaskButton from "../../Atoms/AddTaskButton/index.jsx";
import Task from "../../Molecules/Task/index.jsx";
import COLOR from "../../../variables/color.js";

const TodoCard = () => {
  const [taskList, settaskList] = useState();

  const onAddTaskButtonClick = () => {
    settaskList((currentList) => {
      if (currentList !== undefined) {
        return [...currentList, { name: "", initializing: true }];
      } else {
        return [{ name: "", initializing: true }];
      }
    });
  };
  const onTaskComplete = (index) => {
    settaskList((currentList) => {
      const nextList = currentList.filter((_, idx) => index !== idx);
      return nextList;
    });
  };
  const onTaskNameChange = (value, index) => {
    if (!value) {
      onTaskComplete(index);
    } else {
      settaskList((currentList) =>
        currentList.map((vle, idx) => {
          if (index === idx) {
            return { ...vle, name: value };
          } else {
            return { ...vle };
          }
        })
      );
    }
  };
  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>
        {taskList !== undefined &&
          taskList.map((task, index) => (
            <Task
              key={index}
              onTaskComplete={() => onTaskComplete(index)}
              onTaskChange={(value) => onTaskNameChange(value, index)}
              taskName={task.name}
              defaultIsEditing={task.initializing}
            />
          ))}
      </StyledTaskList>
    </StyledWrapper>
  );
};

export default TodoCard;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background-color: ${COLOR.LIGHT_BLACK};
  width: 500px;
  border-radius: 4px;
`;
const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 6px;
`;
