import React from "react";
import ReactDOM from "react-dom";
import AlertHandlerProvider from "./components/Context/AlertHandlerContext";
import MainPage from "./components/Pages/MainPage";
import AlertManager from "./components/Organisms/AlertManager";
import "./style.css";

ReactDOM.render(
  <AlertHandlerProvider>
    <MainPage />
    <AlertManager />
  </AlertHandlerProvider>,
  document.getElementById("app")
);
