import React from 'react';

import './App.css';

import Navigation from './components/Navigation';
function App() {
  return (
    <div className="App">
  
    <Navigation/>
    <button id='big-btn'>ADD TO METAMASK</button>
    
    <div className='text-a'>
      <button>A</button>
      </div>
      <div className='text-b'>
      <button>B</button>
      <div className='dropdown'>
        <select>
          <option value='english'>English</option>
          <option value='hindi'>Hindi</option>
          <option value='french'>French</option>
        </select>
      </div>
      </div>
    </div>
  );
}

export default App;
