import './App.css';
import { useState } from "react";
import Header from "./myCompo/Header";
import { Todos } from "./myCompo/Todos";
import Footer from "./myCompo/Footer";
import AddTodo from './myCompo/AddTodo';
// import React ,{ useState } from 'react';

function App() {
  const onDelete=(todo)=>{
    console.log("Iam on delete");
    setTodos(todos.filter((e)=>{
      return e!==todo;
    })); 
  }
  const addTodo=(title,desc)=>{
    console.log("I am adding this todo",title,desc)
    let sno=todos[todos.length-1].sno+1
    const myTodo={
      sno:sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }
  const [todos, setTodos]=useState([
    {
      sno: 1,
      title: "you should go to the market",
      desc: "in the market you should buy the vegetables"
    },
    {
      sno: 2,
      title: "you should go to the show room",
      desc: "in the market you should buy the car"
    },
    {
      sno: 3,
      title: "you should go to the police station",
      desc: "To complain about the society"
    },
  ]);
  return (
    <div className="app-container">
      <Header title="harry" />
      <div className="content-wrap">
        <AddTodo addTodo={addTodo}/>
        <Todos todos={todos} onDelete={onDelete} />
      </div>
      <br/>
      <Footer />
    </div>
  );
  
}

export default App;

