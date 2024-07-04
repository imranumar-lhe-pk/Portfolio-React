import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllComponents from "./Componants/AllComponents";
import ComponentsPageTwo from "./Componants/ComponentsPageTwo";
import FirstPgCom from "./Componants/FirstPgCom";

function App() {
  return (
    <Router>
      <div className="max-w-screen-2xl m-auto">
        <Routes>
          <Route path="/" element={<FirstPgCom />} />

          <Route path="/AllComponents" element={<AllComponents />} />

          <Route path="/PageTwo" element={<ComponentsPageTwo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
