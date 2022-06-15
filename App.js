import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null)
      
    }, 2000);
  }

  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#420f9f';
      showAlert("dark mode has been enabled","success");
      document.title = 'Omkar - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success");
      document.title = 'Omkar - Light Mode';
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Omkar" aboutText="About" mode={mode} toggleMode={toggleMode}/> 
    <Alert alert={alert}/>
    <div className="container">
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Textform showAlert={showAlert} heading="Enter the text :- " mode={mode} />         
          </Route>
    </Switch>
    </div> 
    </Router>           
    </>
  );
}

export default App;
