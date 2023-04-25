import './NewList.css'
const NewList=({todo,onCheckBoxClick,onDeleteItem})=>{
  
    const handleCheckboxClick=(id)=>{
       onCheckBoxClick(todo.id)
    }
    const handleDeleteClick=()=>{
        onDeleteItem(todo.id)
    }
    return(
      <div className="todo-list">
        <div className="list">
        <li style={{ textDecoration : todo.completed ? 'line-through' : 'none'}}>
            <span className='task'>
            {todo.task}
            </span>
        
         <input
            type="checkbox"
            checked={todo.completed}
            onChange={()=>handleCheckboxClick(todo.id)}
            />
       
       
        <span className='dlt-btn'>
        <i class="fa-solid fa-trash-can"  onClick={handleDeleteClick}></i>
        
        </span>
        
        </li>
        </div>
      </div>
    );
}

export default NewList;