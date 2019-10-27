import React from 'react';
import logo from './logo.svg';
import './App.css';

import MessageList from './components/MessageList';
import MessageSender from './components/MessageSender';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
     
      <TopBar/>
      <MessageList/>
      <MessageSender/>
      
    </div>
  );
}

export default App;
