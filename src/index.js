import React from 'react';
import ReactDOM from 'react-dom';
import fetchData from './fetchData/index'
import StudentItem from './components/StudentItem'
import StudentList from './components/StudentList'



async function render() {
  const result = await fetchData();
  ReactDOM.render(<StudentList studentArr={result}/> ,document.getElementById("root"));
}

render()





