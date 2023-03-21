import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router";


import AnimalList from "./components/AnimalList";
import AnimalDetails from "./components/AnimalDetails";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route  path="/" Component={() => <AnimalList />} />
        <Route path="/animal/:id" Component={() => <AnimalDetails />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
