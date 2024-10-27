import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage"
import Admin from "./Admin"
import User from "./User"

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-blue-100 flex items-center justify-center">
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/user/*" element={<User />}/>
          <Route path="/admin/*" element={<Admin />}/>          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
