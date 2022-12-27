import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Route path='/'>
        <Home />
        </Route>
      
      </BrowserRouter>

      
    </div>
  );
}

export default App;
