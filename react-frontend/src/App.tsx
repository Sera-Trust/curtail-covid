import React from "react";
import "./App.css";
import Dashboard from "./component/Dashboard";
import { LoaderComponent } from "./component/Loader";

export function App() {
  return (
    <>
      <LoaderComponent></LoaderComponent>
      <Dashboard></Dashboard>
    </>
  );
}
