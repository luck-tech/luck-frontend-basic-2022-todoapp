import React from "react";
import Task from "./index";

export default {
  component: Task,
  title: "Molecules/Task",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  onTaskChange: () => console.log("change"),
  onTaskComplete: () => console.log("complete"),
  taskName: "a",
  defaultIsEditing: false,
};
