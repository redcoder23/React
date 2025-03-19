import './App.css';
import Navbar from './COMPONENTS/Navbar';
// import About from './COMPONENTS/About';
import TextForm from './COMPONENTS/TextForm';
import React, { useState } from 'react';

function App() {

  const [mode, setmode] = useState('light'); //whether the dark mode is enabled or not

  const togglemode = () => {
    if (mode == 'light') {
      setmode('dark');  
      document.body.style.backgroundColor='#042743';
    }
    else {
      setmode('light'); 
      document.body.style.backgroundColor="white" ; 
    }
  }

  return (
    <>
      <Navbar title="textutils" mode={mode} togglemode={togglemode} />
      < div className="container my-3">
      <TextForm heading="Enter the text to analyze below" mode={mode}/> 
        {/* <About /> */}
      </div> 
    </>
  );
}

export default App;
