import React, { useState } from "react";
import styled from "styled-components";
import AddTaskButton from "../../Atoms/AddTaskButton/index.jsx";
import Task from "../../Molecules/Task/index.jsx";

const TodoCard = () => {
  const [taskList, settaskList] = useState();
  const onAddTaskButtonClick = () => {
    settaskList((currentList) => {
      [...currentList, { name: "", initializing: true }];
    });
  };
  const onTaskComplete = (index) => {
    settaskList((currentList) => {
      const nextList = currentList.filter((currentValue, index) => {
        currentValue !== index;
      });
      return nextList;
    });
  };
  const onTaskNameChange = (value, index) => {
    if ((value = "")) {
      onTaskComplete(index);
    } else {
      setTaskList((currentList) =>
        currentList.map((nowvalue) => {
          return { ...nowvalue, name: value };
        })
      );
    }
  };

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick}>
        <StyledTaskList>
          {taskList.map((task, index) => (
            <Task
              key={index}
              onTaskComplete={() => onTaskComplete(index)}
              onTaskNameChange={(value) => {
                onTaskNameChange(value, index);
              }}
              taskName={task.name}
              defaultIsEditing={task.initializing}
            />
          ))}
        </StyledTaskList>
      </AddTaskButton>
    </StyledWrapper>
  );
};

export default TodoCard;

const StyledWrapper = styled.div``;
const StyledTaskList = styled.div``;
