import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  // Challenge 1: Ajout dynamique[cite: 1]
  const addTask = (text) => {
    const newTask = {
      id: crypto.randomUUID(), 
      text: text
    };
    setTasks([...tasks, newTask]);
  };

  // Challenge 3: Suppression[cite: 1]
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>Ma Todo List</h1>
      <TaskInput onAddTask={addTask} />
      
      {/* Challenge 2: Affichage via .map()[cite: 1] */}
      <ul>
        {tasks.map((task) => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onDeleteTask={deleteTask} // Challenge 4: Communication descendante[cite: 1]
          />
        ))}
      </ul>
      
      {tasks.length === 0 && <p>Aucune tâche pour le moment.</p>}
    </div>
  );
}

export default App;
