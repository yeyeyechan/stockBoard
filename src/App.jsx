import { useState } from "react";

import "./App.css";

import { Route, Routes } from "react-router-dom";
import Ranking from "./pages/Ranking";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Ranking />}></Route>
          <Route path="/ranking" element={<Ranking />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
