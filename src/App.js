
import TodoList from "./components_todo/todo_list";
import image from "./components_todo/todo-bg.jpg";
function App() {
  return (
    <div className="Page "  style={{backgroundImage :`url(${image})`, backgroundSize: "cover", height:"100vh"}}>
       <TodoList/>
</div>
  );
}

export default App;
