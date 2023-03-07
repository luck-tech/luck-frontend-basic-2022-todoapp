import React from "react";
import Input from "./index";

export default {
  component: Input,
  title: "Atoms/Input",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultValue: "a",
  onEditComplete: (value) => console.log("Edit Completed:" + value),
};
