import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import AnimatedRoutes from './components/AnimatedRoutes';

import './styles/App.scss';

function App() {


  return (
    <div className="App">

      <Router>

        <AnimatedRoutes />
        
      </Router>

    </div>
  );
}

export default App;
