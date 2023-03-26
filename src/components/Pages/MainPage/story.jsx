import React from "react";
import MainPage from "./index";

export default {
  component: MainPage,
  title: "Pages/MainPage",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <MainPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
