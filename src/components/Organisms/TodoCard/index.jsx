import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddTaskButton from "../../Atoms/AddTaskButton/index.jsx";
import Task from "../../Molecules/Task/index.jsx";
import COLOR from "../../../variables/color.js";
import BREAKPOINT from "../../../variables/breakpoint.js";

const TodoCard = () => {
  const [taskList, settaskList] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("taskData")) {
      settaskList([]);
    } else {
      const data = JSON.parse(localStorage.getItem("taskData"));
      settaskList([...data]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("taskData", JSON.stringify(taskList));
  }, [taskList]);

  const onAddTaskButtonClick = () => {
    const addTask = {
      name: "",
      initializing: true,
    };
    settaskList((taskList) => [...taskList, addTask]);
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
      const newTaskList = [...taskList];
      newTaskList[index].name = value;
      newTaskList[index].initializing = false;
      settaskList(newTaskList);
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
  border-radius: 4px;
  width: 500px;
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    width: 280px;
  }
`;
const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 6px;
`;
