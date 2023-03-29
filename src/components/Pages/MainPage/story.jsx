import React from "react";
import MainPage from "./index";
import AlertManager from "../../Organisms/AlertManager";
import { AlertHandlerProvider } from "../../../contexts/alert_handler";

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
Default.decorators = [
  (Story) => (
    <div>
      <AlertHandlerProvider>
        <AlertManager />
        <Story />
      </AlertHandlerProvider>
    </div>
  ),
];
