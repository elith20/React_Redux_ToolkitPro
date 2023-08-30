import React from "react";

import './App.css';
import Navbar from './components/Manu/Navbar';
import ToDo from './pages/ToDoPage/ToDo';
import About from '../src/pages/About/About';
import PageNotFound from '../src/pages/PageNotFound'
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Tostify from "./components/Tostify/Tostify";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";



function App() {
  
  return (
    <div className='tasks'>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/register" element = {<Registration/>}/>
          <Route path="/todo" element = {<ToDo/>}/>
          <Route path="/about" element = {<About/>}></Route>
          <Route path="/*" element = {<PageNotFound/>}></Route>
        </Routes>
      </Router>
      <Tostify/>
     </div>
  )
    
}

export default App;
