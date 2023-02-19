import React from "react";
import AddTaskButton from "./index";

export default {
  component: AddTaskButton,
  title: "Atoms/AddTaskButton",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <AddTaskButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => console.log("clicked"),
};
