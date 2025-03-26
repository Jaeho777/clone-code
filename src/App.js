import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import MainPage from "./pages/main";

import Header from "../../components/header";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;