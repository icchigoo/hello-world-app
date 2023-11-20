// App.js

import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "../src/loginPage";
import NavigationBar from "../src/navigationBar";
import TablePage from "./TablePage";
import FormElementsPage from "./FormElementsPage";

function App() {
  return (
    <div>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/table" element={<TablePage />} />
        <Route path="/form-elements" element={<FormElementsPage />} />
      </Routes>
    </div>
  );
}

export default App;
