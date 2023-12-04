// App.jsx
import React from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
