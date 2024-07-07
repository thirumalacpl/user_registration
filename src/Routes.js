import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SecondPage from "./Pages/secondPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/secondPage" element={<SecondPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
