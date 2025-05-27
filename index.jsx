import React, { useRef, useState,useEffect} from 'react';
import Todoicon from './todo_icon.png';
import './index.css'
import TodoItem from './TodoItem';
const TodoApp = () => {
   const[todolist,setTodoList]=useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]);
   const inputRef=useRef();
   const add = () => {
    const input=inputRef.current.value.trim();
    if(input=="")
        return null;
    const newData={
        id:Date.now(),
        text:input,
        isComplete:false
    }
    setTodoList((prevTodo)=>[...prevTodo,newData])
    inputRef.current.value="";
   }
   const del=(id)=>{
        setTodoList((prevTodo)=>{
            return prevTodo.filter((todo)=>todo.id!==id)
        })
   }
   const mark=(id)=>{
        setTodoList((prevTodo)=>{
            return prevTodo.map((todo)=>{
                if(todo.id==id)
                {
                    return {...todo,isComplete:!todo.isComplete};
                }
                return todo;     
            }
        )
            
        })
   }
   useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todolist));
   },[todolist])
  return (
    <div className='todo-app'>
        <div style={{display:"flex"}} className='head'>
            <img src={Todoicon} style={{width:"35px",height:"35px"}}/>
            <h2>TODO LIST</h2>
        </div>
        <div className='body'>
            <input ref={inputRef} type="text" className='input'/>
            <button onClick={add}>Add</button>
        </div>
        <div >
            {todolist.map((item)=>(
                <TodoItem text={item.text} key={item.id} del={del} id={item.id} isComplete={item.isComplete} mark={mark}/>
            ))}
        </div>
    </div>
  )
}
export default TodoApp
