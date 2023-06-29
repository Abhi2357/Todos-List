import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import React,{useState,useEffect} from "react";
import AddTodo from "./Components/AddTodo";

function App() {

  let initTodo;
  if(localStorage.getItem("todos")==="[[[[[]]]]]"){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
    console.log("0");
  }
  // console.log("Init Todo  length ",{initTodo.length});

  const onDelete=(todo)=>{
    console.log("I am deleting ",todo);

    // Direct Slicing will not work

    setTodos(todos.filter((e)=>{
      return e!==todo
    }))

    // localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo=(title,desc)=>{
    console.log("I am adding this todo",title,desc);
    let sno;
    if(todos.length===0)
    sno=1;
    else
    sno=todos[todos.length-1].sno +1;

    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);

    // localStorage.setItem("todos",JSON.stringify(todos));
  }



  const[todos,setTodos]=useState(initTodo);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    <>
    <Header title="To-Do-List" searchBar={false} />
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
