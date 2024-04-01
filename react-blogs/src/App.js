import './App.css'
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/todos?limit=20")
    fetch("http://localhost:4000")
      .then((response) => response.json())
      .then((json) => setTodos(json.slice(0,20)));
  }, []);

  return (
    <div className="App">
      <ui >
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ui>
    </div>
  );
}

export default App;
