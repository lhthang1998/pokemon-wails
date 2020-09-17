import React from 'react';
import logo from './logo.png';
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Content></Content>
    </div>
  );
}

export default App;
