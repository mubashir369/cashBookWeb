import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
 
} from "react-router-dom";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Expense from "./pages/Expense/Expense";


function App() {
 
  return (
    <>
      
      <Router>
        <Home/>
        <Routes>
          <Route path="/" element={<Expense/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
