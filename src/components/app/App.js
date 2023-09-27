import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "../authentication/Login";
import Registration from "../registration/Registration";

const App = () => {
  return (
    <div className='full-width '>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route exact path="/registration" element={<Registration/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;