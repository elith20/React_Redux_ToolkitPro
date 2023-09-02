import React from "react";

import './App.css';
import Navbar from './components/Manu/Navbar';
import ToDo from './pages/ToDoPage/ToDo';
import About from '../src/pages/About/About';
import PageNotFound from './pages/NoPage/PageNotFound'
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Tostify from "./components/Tostify/Tostify";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import Login from './pages/Login/Login'



function App() {
  
  return (
    <div className='pages'>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/todo" element = {<ToDo/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/register" element = {<Registration/>}/>
          <Route path="/signin" element = {<Login/>}/>
          <Route path="/*" element = {<PageNotFound/>}/>
        </Routes>
      </Router>
      <Tostify/>
     </div>
  )
    
}

export default App;
