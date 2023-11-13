import React from "react";
import { Data } from "../src/Data";
import "./App.css";
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <Data>
        <Home />
      </Data>
    </>
  );
}
