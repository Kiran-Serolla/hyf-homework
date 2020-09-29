import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './todo';

const todo = [
  { description : "Get out of bed ",  deadline : "Wed 13 Sep 2017"},
  {description : "Brush Teeth ", deadline : "Thu 14 Sep 2017"},
  {description : "Eat breakfast ", deadline : "Fri 15 Sep 2017"}
    ];
 
function App() {
 
  return (
    
    <div className="App">
       <h1>ToDo list</h1>
                 
       {todo.map(list => {
       return(<ToDo description ={list.description} deadline= {list.deadline}/>);
         
        })}
    </div>
  );
}

export default App;
