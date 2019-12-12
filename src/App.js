import React from 'react';
import Logo from './components/Logo/Logo';
import {UserForm} from './components/UserForm/UserForm';
import {Appbar} from './components/Appbar/Appbar';
import './App.css';

class App extends React.Component{
  render(){
    return (
      <div className = "App">
        <Appbar />
        <UserForm />
      </div>    
    );
  }
}

export default App;
