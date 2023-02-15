import React from "react";
import Title from "./index";

export default {
  component: Title,
  title: "Atoms/Title",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Title {...args} />;

export const Default = Template.bind({});
