import React from "react";
import Checkbox from "./index";

export default {
  component: Checkbox,
  title: "Atoms/Checkbox",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => console.log("clicked"),
};
