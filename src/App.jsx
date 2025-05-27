import './App.css';
import React from "react"
import { Routes, Route } from "react-router-dom";

import Header from './components/Header'

import PageTemplate from './pages/PageTemplate'
import Projects from "./pages/Projects";

const App = () => {
return (
	<div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<PageTemplate />} />
      <Route path="/projects" element={<Projects />} />
	  <Route path="/archive" element={<PageTemplate fn={(card) => card.year === "HS"}/>} />
    </Routes>
  </div>
)
}

export default App;
