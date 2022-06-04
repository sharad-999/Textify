import React, { useState } from 'react'
import './App.css';
import  Navbar  from "./components/Navbar";
import TextForm  from "./components/TextForm";
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [mode,setMode]=useState('light');

      const toggleMode=()=>{
        if(mode==='dark'){
          setMode('light');
          document.body.style.backgroundColor='white';
          console.log('clicked');
        }
        else{
          setMode('dark');
          document.body.style.backgroundColor ='#212529';
          console.log('clicked');
        }
      }
      return (
        <>
          <Router>
          <Navbar title='TEXTify' mode={mode} toggleMode={toggleMode} />
            <Routes>
              <Route path="/" element={<TextForm heading='Enter text below!!' mode={mode} />}/>
              <Route path='/about' element={<About mode={mode}/>}/>
            </Routes>
          </Router>
        </>
      ); 
    }
export default App;