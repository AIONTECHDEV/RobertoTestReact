import React from 'react';
import './App.css';
import { BrowserRouter, Route  } from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar";
import {login} from "./components/Login/login";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from "./components/Home/Home";

function App() {
  return (
      <div>
        <BrowserRouter>
          <div>
            <NavBar />
            <Route exact path="/" component={login} />
            <Route exact path="/home" component={Home}/>
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;
