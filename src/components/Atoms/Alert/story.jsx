import React from "react";
import Alert from "./index";

export default {
  component: Alert,
  title: "Atoms/Alert",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {};
