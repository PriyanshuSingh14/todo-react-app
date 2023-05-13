import NewList from "./NewList.js";
import "./todo_list.css";
import { useState } from "react";


const TodoList = () => {
  const [item, setItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  const newItemHandler = (event) => {
    setItem(event.target.value);
  };
  const newListHandler = () => {
    if(item.trim().length===0){
      return;
    }

    const newItemAdded = {
      task: item,
      id: Math.random().toString(),
      completed: false,
    };
    setTodoList([...todoList, newItemAdded]);
    setItem("");
    
  };
 

  const CheckBoxHandler = (id) => {
    const updatedTodos = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodoList(updatedTodos);
  };
  const DeleteItemHandler = (id) => {
     const newListUpdated = todoList.filter((todo) => todo.id !== id);
    setTodoList(newListUpdated);
  };

  return (
    <div className="mainPage "  >
    
      <div className="todo_title">
        <strong> TODO </strong>
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="plan here "
          value={item}
          onChange={newItemHandler}
          onKeyDown={(event) => {
            if (event.keyCode === 13) {
              newListHandler();
            }
          }}
        ></input>
        <button type="button" onClick={newListHandler}>
          +
        </button>
      </div>
      {todoList.map((item) => (
        <NewList
          todo={item}
          key={item.id}
          index={item.id}
          onCheckBoxClick={CheckBoxHandler}
          onDeleteItem={DeleteItemHandler}
        ></NewList>
      ))}
    </div>
  );
};

export default TodoList;
