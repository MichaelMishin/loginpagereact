import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


import { AnimatedRoutes } from './components';

function App() {
  return (
    <div className="App bg-gray-900">
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
