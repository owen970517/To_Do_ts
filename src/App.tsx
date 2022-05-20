import React from 'react';
import {createGlobalStyle} from 'styled-components'
import ToDoList from './components/ToDoList';

const GlobalStyle = createGlobalStyle`
`;

const App = () =>{
  return (
    <>
      <GlobalStyle/>   
      <ToDoList/> 
    </>
  );
}

export default App;
