import React from "react";
import TodoCard from "./index";

export default {
  component: TodoCard,
  title: "Organisms/TodoCard",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <TodoCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
